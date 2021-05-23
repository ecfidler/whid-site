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
        await loadCatalog();
        // populate instance variables
        try {
            this.setupPage();
        } catch (err) {
            if (err instanceof VideoIDError)
                goToGallery();
            else throw err
        }
    },
    methods: {
        async setupPage() {
            let id = getID();
            let data = getVideoDataFromID(id);

            this.thumbnailURL = constructThumbnailURL(id);
            this.videoURL = constructVideoURL(id);
            this.title = data["title"];
            this.releaseDate = constructDate(data["releaseDate"]);
            this.parts = data["parts"]

            document.title = "Watching " + this.title
        },
        goToPart(partIndex) {
            this.$refs.video.currentTime = convertTimestampToSeconds(parts[partIndex]["timestamp"]);
        }
    }
}

Vue.createApp(player).mount('#playerApp')

function convertTimestampToSeconds(timestamp) {
    let [min, sec] = timestamp.split(":").map(x => Number(x));
    return min * 60 + sec
}