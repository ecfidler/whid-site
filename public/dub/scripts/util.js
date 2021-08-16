let jsonPath = "catalog.json"
let catalog;

class VideoIDError extends Error {
    constructor(message) {
        super(message);
        this.name = "VideoIDError";
    }
}

async function initCatalog() {
    await loadCatalog();
    for (seasonID in catalog["seasons"]) {
        let season = catalog["seasons"][seasonID]
        season["episodes"].map(x => x["season"] = seasonID)
    }
}

async function loadCatalog() {
    const request = async () => {
        const response = await fetch(jsonPath);
        catalog = await response.json();
    };
    await request();
}

function getSeasonByID(seasonID) {
    return getSeasons()[seasonID]
}

function getSeasons() { // called outside of file
    return catalog["seasons"]
}

function getFeaturedVideo() {
    let [season, id, desc] = getFeaturedVideoData();
    let data = getVideoDataFromID(season, id);
    return [data, desc]
}

function getFeaturedVideoData() {
    return [catalog['featured']["season"],
        catalog['featured']["id"],
        catalog["featured"]["description"]
    ]
}

function getVideoDataFromID(season, id) {
    const episodes = getEpisodesFromSeason(season);
    let episode = getEpisodeFromList(episodes, id);
    console.log(episode)
    return episode
}

function getEpisodesFromSeason(season) {
    return catalog["seasons"][season]["episodes"]
}

function getEpisodeFromList(episodes, epid) {
    for (const episode of episodes) {
        if (episode["id"] === epid) {
            return episode;
        }
    }
    throw new VideoIDError("Video ID not found in catalog")
}

function constructWatchURL(ep) {
    return "watch.php?s=" + ep["season"] + "&e=" + ep["id"]
}

function constructVideoURL(ep) {
    return "resources/videos/" + ep["season"] + "/" + ep["id"] + ".mp4"
}

function constructThumbnailURL(ep) {
    return "resources/thumbnails/" + ep["season"] + "/" + ep["id"] + ".png"
}

function constructDate(ep) {
    return ep["releaseDate"];
}

function goToGallery() {
    window.location.replace("../dub/?error=true");
}

function getErrorFromURL() {
    return Boolean(getParamFromURL("error"))
}

function getSeasonAndEpisodeFromURL() {
    let season = getParamFromURL("s");
    let ep = getParamFromURL("e");
    if (season === null || ep === null) {
        throw new VideoIDError("No ID supplied in URL");
    }
    return [season, ep]
}

function getTimestampFromURL() {
    let time = getParamFromURL("t");
    if (time != null && time < 0)
        throw new VideoIDError("Invalid timestamp");
    return time;
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