const gallery = {
    data() {
        return {
            activeSeason: "s1",
            seasons: {},
            showAlert: false,
        }
    },
    async mounted() {
        await loadCatalog();
        this.seasons = getSeasons();
        this.showAlert = getErrorFromURL();
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
