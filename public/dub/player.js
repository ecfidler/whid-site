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