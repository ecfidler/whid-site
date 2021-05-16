jsonPath = "catalog.json"

class VideoIDError extends Error {
    constructor(message) {
        super(message);
        this.name = "VideoIDError";
    }
}

const player = {
    data() {
        return {
            title: "",
            releaseDate: "",
            videoURL: "",
            thumbnailURL: "",
        }
    },
    async mounted() {
        // populate instance variables
        try {
            var id = getID();
            var data = await getVideoDataFromID(id);
        } catch (err) {
            if (err instanceof VideoIDError)
                goToGallery();
            else throw err
        }

        this.title = data["title"];
        this.releaseDate = constructDate(data["releaseDate"]);
        this.videoURL = constructVideoURL(id);
        this.thumbnailURL = constructThumbnailURL(id);

        document.title = "Watching " + this.title
    }
}

Vue.createApp(player).mount('#playerApp')

const gallery = {
    data() {
        return {
            activeEpisodes: [],
            activeSeason: "s1",

            seasons: {},
        }
    },
    async mounted() {
        // load all episode data
        // make the buttons using the "name" field of each season
        //  buttons need some sort of id for which season they are
        //  maybe add a parameter to a v-on call
        // set the active episodes to s1

    },
    methods: {
        // onButtonPressed - changes the displayed season
    }
}

Vue.createApp(gallery).mount('#galleryApp')

function getID() {
    let id = getIDFromURL()
    if (id === null) {
        throw new VideoIDError("No ID supplied in URL");
    }
    return id
}

function getIDFromURL() {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    let id = params.get("v");
    return id;
}

async function getVideoDataFromID(id) {
    let outEp;
    const request = async () => {
        const response = await fetch(jsonPath);
        const json = await response.json();
        const season = json[getSeason(id)];
        const episodes = season["episodes"];
        outEp = getEpisodeFromList(episodes, id);
    }
    await request();
    return outEp
}

function getEpisodeFromList(episodes, id) {
    for (const epIndex in episodes) {
        const episode = episodes[epIndex];
        if (episode["id"] === id) {
            return episode;
        }
    }
    throw new VideoIDError("Video ID not found in catalog")
}

function constructVideoURL(id) {
    return "resources/videos/" + getSeason(id) + "/" + id + ".mp4"
}

function getSeason(id) {
    return id.split('-')[0];
}

function constructThumbnailURL(id) {
    return "resources/thumbnails/" + id + ".png"
}

function constructDate(date) {
    return joinDate = new Date(date).toLocaleDateString('en-US');
}

function goToGallery() {
    window.location.replace("../dub?error=True");
}
