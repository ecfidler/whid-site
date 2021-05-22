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
        await loadCatalog();
        this.seasons = getSeasons();
        this.showAlert = getErrorFromURL();
        [this.featured, this.featuredDesc] = getFeaturedVideo();
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
