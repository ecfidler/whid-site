let jsonPath = "catalog.json"

class VideoIDError extends Error {
    constructor(message) {
        super(message);
        this.name = "VideoIDError";
    }
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

async function getVideoDataFromID(id) {
    var catalog = await loadCatalog()
    // const season = catalog[getSeason(id)];
    const season = getSeason(catalog, id);
    const episodes = season["episodes"];
    let outEp = getEpisodeFromList(episodes, id);
    return outEp
}

async function loadSeasons() {
    var catalog = await loadCatalog();
    return catalog["seasons"]
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

async function loadFeaturedVideo() {
    var catalog = await loadCatalog()
    let [id, desc] = getFeaturedVideoData(catalog);
    let data = await getVideoDataFromID(id);
    return [data, desc]
}

function getFeaturedVideoData(catalog) {
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

function getSeason(catalog, id) {
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
