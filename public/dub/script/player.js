const player = {
    data() {
        return {
            title: "",
            releaseDate: "",
            videoURL: "",
            thumbnailURL: "",
            parts: [],
        }
    },
    async mounted() {
        await initCatalog();
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
            let [season, id] = getSeasonAndEpisodeFromURL();
            let ep = getVideoDataFromID(season, id);

            this.thumbnailURL = constructThumbnailURL(ep);
            this.videoURL = constructVideoURL(ep);
            this.title = ep["title"];
            this.releaseDate = constructDate(ep);
            this.parts = ep["parts"]

            document.title = "Watching " + this.title
            this.$refs.video.volume = 0.4
        },
        goToPart(partIndex) {
            this.$refs.video.currentTime = convertTimestampToSeconds(this.parts[partIndex]["timestamp"]);
        }
    }
}

Vue.createApp(player).mount('#playerApp')

function convertTimestampToSeconds(timestamp) {
    let [min, sec] = timestamp.split(":").map(x => Number(x));
    return min * 60 + sec
}