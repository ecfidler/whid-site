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
            await this.setupPage();
        } catch (err) {
            if (err instanceof VideoIDError)
                goToGallery();
            else throw err
        }
    },
    methods: {
        async setupPage() {
            let id = getID();
            let data = await getVideoDataFromID(id);

            this.title = data["title"];
            this.releaseDate = constructDate(data["releaseDate"]);
            this.videoURL = constructVideoURL(id);
            this.thumbnailURL = constructThumbnailURL(id);

            document.title = "Watching " + this.title
        }
    }
}

Vue.createApp(player).mount('#playerApp')

const gallery = {
    data() {
        return {
            activeSeason: "s1",
            seasons: {},
            showAlert: false,
        }
    },
    async mounted() {
        this.seasons = await loadCatalog();
        this.showAlert = getErrorFromURL();
    },
    methods: {
        title(episode) {
            return episode['title']
        },
        date(episode) {
            return constructDate(episode['releaseDate'])
        },
        thumbnail(episode) {
            return constructThumbnailURL(episode['id'])
        },
        video(episode) {
            return constructWatchURL(episode['id'])
        }
    }
}

Vue.createApp(gallery).mount('#galleryApp')

function getErrorFromURL() {
    let params = getParamsFromURL();
    let error = params.get("error");
    return Boolean(error)
}

function getID() {
    let id = getIDFromURL()
    if (id === null) {
        throw new VideoIDError("No ID supplied in URL");
    }
    return id
}

function getIDFromURL() {
    let params = getParamsFromURL();
    let id = params.get("v");
    return id;
}

function getParamsFromURL() {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    return params;
}

async function getVideoDataFromID(id) {
    var catalog = await loadCatalog();
    const season = catalog[getSeason(id)];
    const episodes = season["episodes"];
    let outEp = getEpisodeFromList(episodes, id);
    return outEp
}

async function loadCatalog() {
    var json;
    const request = async () => {
        const response = await fetch(jsonPath);
        json = await response.json();
    };
    await request();
    return json;
}

function getEpisodeFromList(episodes, id) {
    for (const episode of episodes) {
        if (episode["id"] === id) {
            return episode;
        }
    }
    throw new VideoIDError("Video ID not found in catalog")
}

function constructWatchURL(id) {
    return "watch.html?v=" + id
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
    return joinDate = new Date(date + " EST").toLocaleDateString('en-US');
}

function goToGallery() {
    window.location.replace("../dub/?error=true");
}
