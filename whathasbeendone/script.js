var canvas = document.getElementById('header_canvas');
var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

// you should  only initialize a canvas once, so save this function
// we'll save it to the canvas itself for the purpose of this demo
canvas.confetti = canvas.confetti || confetti.create(canvas, { resize: true });

function fire(particleRatio, opts) {
    canvas.confetti(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }

setTimeout(() => {
    fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
}, 750);

const Carousel = {
    data() {
        return {
            name1: false,
            name2: true,
            counter1: 1,
            counter2: 0,
            words: ['quality discussion', 'cheeto', 'games', 'gaming', 'gamers',
                    'art', 'tierlists', 'videos', 'music', 'laughs', 'memes', 
                    'good times', '𝓗𝓮𝓪𝓿𝓮𝓷', 'movies', 'dubs']
        }
    },
    mounted() {
        setInterval(() => {
            if(this.name2 === true) {
                this.counter1 = chooseRandomFunction(this.words.length, this.counter2);
                this.name1 = true;
                this.name2 = false;
            } else {
                this.counter2 = chooseRandomFunction(this.words.length, this.counter1);
                this.name1 = false;
                this.name2 = true;
            }
        }, 3000);
    }
};

// Actual most optimal code
function chooseRandomFunction(total, old) {
    const pick = Math.floor(Math.random() * 2);
    if(pick == 1)
        return getRandomIntBen(total, old);
    return getRandomIntBrendan(total, old);
}

function getRandomIntBrendan(total, old) {
    let newNum = Math.floor(Math.random() * total);
    if(newNum == old)
        ++newNum < total ? null : newNum -= 2;
    return newNum;
}

function getRandomIntBen(total, old) {
    let newNum = Math.floor(Math.random() * (total-1));
    if (newNum >= old)
        newNum = (newNum + 1) % total;
    return newNum;
}

Vue.createApp(Carousel).mount('#header_ticker');