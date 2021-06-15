const gallery = {
    data() {
        return {
            activeSeason: "s1",
            seasons: {},
            showAlert: false,
            featured: null,
            featuredDesc: "",
        }
    },
    async mounted() {
        await initCatalog();
        this.seasons = getSeasons();
        this.showAlert = getErrorFromURL();
        [this.featured, this.featuredDesc] = getFeaturedVideo();
    },
    methods: {
        title(episode) {
            return episode['title']
        },
        date(episode) {
            return constructDate(episode)
        },
        thumbnail(episode) {
            return constructThumbnailURL(episode)
        },
        video(episode) {
            return constructWatchURL(episode)
        },
        thumbnailFeatured() {
            return constructThumbnailURL(this.featured)
        },
        watchFeatured() {
            return constructWatchURL(this.featured)
        },
    }
}

Vue.createApp(gallery).mount('#galleryApp')
