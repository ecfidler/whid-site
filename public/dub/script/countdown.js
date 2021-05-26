const countdown = {
    data() {
        return {
            timerCount: 30
        }
    },
    watch: {
        timerCount: {
            handler(value) {
                if (true) {
                    setTimeout(() => {
                        this.timerCount--;
                    }, 1000)
                }
            },
            immediate: true
        }
    }
}

Vue.createApp(countdown).mount('#countdown')
