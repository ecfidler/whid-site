let jsonPath = "catalog.json"
let catalog;

class VideoIDError extends Error {
    constructor(message) {
        super(message);
        this.name = "VideoIDError";
    }
}

async function loadCatalog() {
    const request = async () => {
        const response = await fetch(jsonPath);
        catalog = await response.json();
    };
    await request();
}

function getErrorFromURL() {
    return Boolean(getParamFromURL("error"))
}

function getID() {
    let id = getIDFromURL()
    if (id === null) {
        throw new VideoIDError("No ID supplied in URL");
    }
    return id
}

function getIDFromURL() {
    return getParamFromURL("v");
}

function getParamFromURL(key) {
    let params = getParamsFromURL();
    let param = params.get(key);
    return param;
}

function getParamsFromURL() {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    return params;
}

function getVideoDataFromID(id) {
    const season = getSeason(id);
    const episodes = season["episodes"];
    return getEpisodeFromList(episodes, id);
}

function getSeasons() {
    return catalog["seasons"]
}

function getFeaturedVideo() {
    let [id, desc] = getFeaturedVideoData();
    let data = getVideoDataFromID(id);
    return [data, desc]
}

function getFeaturedVideoData() {
    return [catalog['featured']["id"], catalog["featured"]["description"]]
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
    return "resources/videos/" + getSeasonID(id) + "/" + id + ".mp4"
}

function getSeasonID(id) {
    return id.split('-')[0];
}

function getSeason(id) {
    let seasonID = getSeasonID(id);
    return catalog["seasons"][seasonID]
}

function constructThumbnailURL(id) {
    return "resources/thumbnails/" + id + ".png"
}

function constructDate(date) {
    return date;
}

function goToGallery() {
    window.location.replace("../dub/?error=true");
}
