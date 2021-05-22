const featured = {
    data() {
        return {
            episode: null,
            description: null,
        }
    },
    async mounted() {
        [this.episode, this.description] = await loadFeaturedVideo();
    },
    methods: {
        title() {
            return this.episode['title']
        },
        date() {
            return constructDate(this.episode['releaseDate'])
        },
        thumbnail() {
            return constructThumbnailURL(this.episode['id'])
        },
        video() {
            return constructWatchURL(this.episode['id'])
        }
    }
}

Vue.createApp(featured).mount('#featuredVideoApp')
