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

function getSeason(epid) {
    return getSeasonByID(getSeasonID(epid))
}

function getSeasonByID(seasonID) {
    return getSeasons()[seasonID]
}

function getSeasonID(id) {
    return id.split('-')[0];
}

function getSeasons() { // called outside of file
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

function getVideoDataFromID(epid) {
    const season = getSeason(epid);
    const episodes = season["episodes"];
    return getEpisodeFromList(episodes, epid);
}

function getEpisodeFromList(episodes, epid) {
    for (const episode of episodes) {
        if (episode["id"] === epid) {
            return episode;
        }
    }
    throw new VideoIDError("Video ID not found in catalog")
}

function constructWatchURL(epid) {
    return "watch.html?v=" + epid
}

function constructVideoURL(epid) {
    return "resources/videos/" + getSeasonID(epid) + "/" + epid + ".mp4"
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