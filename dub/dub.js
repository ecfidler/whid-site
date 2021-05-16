jsonPath = "catalog.json"

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
        const id = getID();
        const data = await getVideoDataFromID(id);

        this.title = data["title"];
        this.releaseDate = constructDate(data["releaseDate"]);
        this.videoURL = constructVideoURL(id);
        this.thumbnailURL = constructThumbnailURL(id);

        document.title = "Watching " + this.title
    }
}

const app = Vue.createApp(player).mount('#playerApp')

function getID() {
    let id = getIDFromURL()
    if (id === null) {
        window.location.replace("../dub");
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

