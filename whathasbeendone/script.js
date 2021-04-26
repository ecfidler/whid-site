var confettiCanvas = document.getElementById('header_canvas');
var confettiCount = 200;
var confettiDefaults = {
  origin: { y: 0.5 }
};

// you should  only initialize a canvas once, so save this function
// we'll save it to the canvas itself for the purpose of this demo
confettiCanvas.confetti = confettiCanvas.confetti || confetti.create(confettiCanvas, { resize: true });

function fire(particleRatio, opts) {
  confettiCanvas.confetti(Object.assign({}, confettiDefaults, opts, {
    particleCount: Math.floor(confettiCount * particleRatio)
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
}, 1000);

const Carousel = {
  data() {
    return {
      name1: false,
      name2: true,
      counter1: 1,
      counter2: 0,
      words: ['quality discussion', 'cheeto', 'games', 'gaming', 'gamers',
        'art', 'tierlists', 'videos', 'music', 'laughs', 'memes',
        'good times', '𝓗𝓮𝓪𝓿𝓮𝓷', 'movies', 'dubs', 'Ls', 'jerma', 'james'],
    }
  },
  mounted() {
    this.words = shuffleExceptFirst(this.words)
    setInterval(() => {
      if (this.name2 === true) {
        this.counter1 = (this.counter2 + 1) % this.words.length;
        this.name1 = true;
        this.name2 = false;
      } else {
        this.counter2 = (this.counter1 + 1) % this.words.length;
        this.name1 = false;
        this.name2 = true;
      }
    }, 3000);
  }
};

function shuffleExceptFirst(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i) + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr
}

// Actual most optimal code
function chooseRandomFunction(total, old) {
  const pick = Math.floor(Math.random() * 2);
  if (pick == 1)
    return getRandomIntBen(total, old);
  return getRandomIntBrendan(total, old);
}

function getRandomIntBrendan(total, old) {
  let newNum = Math.floor(Math.random() * total);
  if (newNum == old)
    ++newNum < total ? null : newNum -= 2;
  return newNum;
}

function getRandomIntBen(total, old) {
  let newNum = Math.floor(Math.random() * (total - 1));
  if (newNum >= old)
    newNum = (newNum + 1) % total;
  return newNum;
}

Vue.createApp(Carousel).mount('#header_ticker');

const messageLeaderboard = {
  data() {
    return {
      currentlySpam: true,
      active: [
        ["1.", "bebenebenebeb#8098", "25,345"],
        ["2.", "El Jefe#5223", "20,501"],
        ["3.", "Rythm#3722", "20,285"],
        ["4.", "fops#1969", "17,136"],
        ["5.", "Us#0704", "12,745"],
      ],
      hidden: [
        ["1.", "El Jefe#5223", "12,531"],
        ["2.", "bebenebenebeb#8098", "11,406"],
        ["3.", "fops#1969", "9,710"],
        ["4.", "noss#0773", "7,119"],
        ["5.", "Sharkwood#8876", "5,008"],
      ],
    }
  },
  methods: {
    toggleSpam() {
      temp = this.active;
      this.active = this.hidden;
      this.hidden = temp;

      this.currentlySpam = !this.currentlySpam
    }
  }
};
Vue.createApp(messageLeaderboard).mount("#messagesApp")

const mentionsLeaderboard = {
  data() {
    return {
      currentlySpam: true,
      people: [
        ["1.", "@fops", "1,176"],
        ["2.", "@El Jefe", "799"],
        ["3.", "@noss", "644"],
        ["4.", "@bebenebenebeb", "637"],
        ["5.", "@Saturn", "364"],
      ],
      hidden: [
        ["1.", "@fops", "685"],
        ["2.", "@El Jefe", "622"],
        ["3.", "@noss", "518"],
        ["4.", "@bebenebenebeb", "440"],
        ["5.", "@Klankyer", "242"],
      ]
    }
  },
  methods: {
    toggleSpam() {
      [this.people, this.hidden] = [this.hidden, this.people];

      this.currentlySpam = !this.currentlySpam;

      setTimeout(() => {
        enableTooltips();
      }, 100)
    },
    map(key) {
      return map[key]
    }
  }
};
Vue.createApp(mentionsLeaderboard).mount("#mentionsApp")

map = {
  "🎲": "https://twemoji.maxcdn.com/v/latest/72x72/1f3b2.png",
  "👋": "https://twemoji.maxcdn.com/v/latest/72x72/1f44b.png",
  "📌": "https://twemoji.maxcdn.com/v/latest/72x72/1f4cc.png",
  "👍": "https://twemoji.maxcdn.com/v/latest/72x72/1f44d.png",
  "😋": "https://twemoji.maxcdn.com/v/latest/72x72/1f60b.png",
  "🔜": "https://twemoji.maxcdn.com/v/latest/72x72/1f51c.png",
  "🤰": "https://twemoji.maxcdn.com/v/latest/72x72/1f930.png",
  "🕺": "https://twemoji.maxcdn.com/v/latest/72x72/1f57a.png",
  "🍑": "https://twemoji.maxcdn.com/v/latest/72x72/1f351.png",
  "🤺": "https://twemoji.maxcdn.com/v/latest/72x72/1f93a.png",
  "😳": "https://twemoji.maxcdn.com/v/latest/72x72/1f633.png",
  "⬛": "https://twemoji.maxcdn.com/v/latest/72x72/2b1b.png",
  "👎": "https://twemoji.maxcdn.com/v/latest/72x72/1f44e.png",
  "👇": "https://twemoji.maxcdn.com/v/latest/72x72/1f447.png",
  "🔻": "https://twemoji.maxcdn.com/v/latest/72x72/1f53b.png",
  "⬇️": "https://twemoji.maxcdn.com/v/latest/72x72/2b07.png",
  "🔽": "https://twemoji.maxcdn.com/v/latest/72x72/1f53d.png",
  "😱": "https://twemoji.maxcdn.com/v/latest/72x72/1f631.png",
  "🥭": "https://twemoji.maxcdn.com/v/latest/72x72/1f96d.png",
  "😩": "https://twemoji.maxcdn.com/v/latest/72x72/1f629.png",
  "🍔": "https://twemoji.maxcdn.com/v/latest/72x72/1f354.png",
  "🤢": "https://twemoji.maxcdn.com/v/latest/72x72/1f922.png",
  "💯": "https://twemoji.maxcdn.com/v/latest/72x72/1f4af.png",
  "❤️": "https://twemoji.maxcdn.com/v/latest/72x72/2764.png",
  "😫": "https://twemoji.maxcdn.com/v/latest/72x72/1f62b.png",
  "😤": "https://twemoji.maxcdn.com/v/latest/72x72/1f624.png",
  "🇩": "https://twemoji.maxcdn.com/v/latest/72x72/1f1e9.png",
  "🇦": "https://twemoji.maxcdn.com/v/latest/72x72/1f1e6.png",
  "🇧": "https://twemoji.maxcdn.com/v/latest/72x72/1f1e7.png",
  
  ":ahegao1:": "../resources/emojis/ahegao1.png", 
  ":ahriHeart:": "../resources/emojis/ahriheart.png", 
  ":BarryBustaNutBenson:": "../resources/emojis/BarryBustaNutBenson.png", 
  ":bea:": "../resources/emojis/bea.png", 
  ":bigdrake1:": "../resources/emojis/bigdrake1.gif", 
  ":bigdrake2:": "../resources/emojis/bigdrake2.gif", 
  ":bigdrake3:": "../resources/emojis/bigdrake3.gif", 
  ":bigdrake4:": "../resources/emojis/bigdrake4.gif", 
  ":blushcat:": "../resources/emojis/blushcat.png", 
  ":chad:": "../resources/emojis/chad.png", 
  ":cheeto:": "../resources/emojis/cheeto.png", 
  ":cum:": "../resources/emojis/cum.png", 
  ":dab:": "../resources/emojis/dab.png", 
  ":dabThumbsDown:": "../resources/emojis/dabThumbsDown.png", 
  ":davithumbsdown:": "../resources/emojis/davithumbsdown.png", 
  ":dogeKek:": "../resources/emojis/dogeKek.png", 
  ":Doubt1:": "../resources/emojis/Doubt1.png", 
  ":downdoot:": "../resources/emojis/downvote.png", 
  ":downvote-reddit:": "../resources/emojis/downvote-reddit.png", 
  ":downvote:": "../resources/emojis/downvote.png", 
  ":Downvote:": "../resources/emojis/downvote.png", 
  ":drake:": "../resources/emojis/drake.gif", 
  ":elaineDance:": "../resources/emojis/elaineDance.gif", 
  ":goopie:": "../resources/emojis/goopie.gif", 
  ":gunright:": "../resources/emojis/gunright.png", 
  ":intensifeyes:": "../resources/emojis/intensifeyes.png", 
  ":joe:": "../resources/emojis/joe.png", 
  ":kale:": "../resources/emojis/kale.png", 
  ":kass:": "../resources/emojis/kass.png", 
  ":kill:": "../resources/emojis/kill.png", 
  ":kirby:": "../resources/emojis/kirby.gif", 
  ":kylecum:": "../resources/emojis/kylecum.png", 
  ":lfg:": "../resources/emojis/lfg.png", 
  ":markwood:": "../resources/emojis/markwood.png", 
  ":Nora:": "../resources/emojis/Nora.png", 
  ":partyparrot:": "../resources/emojis/partyparrot.gif", 
  ":pizza:": "../resources/emojis/pizza.png", 
  ":PogBreathing:": "../resources/emojis/PogBreathing.gif", 
  ":ranbowfrog:": "../resources/emojis/ranbowfrog.gif", 
  ":shredward:": "../resources/emojis/shredward.png", 
  ":smug1:": "../resources/emojis/smug1.png", 
  ":snek:": "../resources/emojis/snek.png", 
  ":sonervous:": "../resources/emojis/sonervous.png", 
  ":spotify:": "../resources/emojis/spotify.png", 
  ":themeaning:": "../resources/emojis/themeaning.png", 
  ":troll:": "../resources/emojis/troll.png", 
  ":trueshred:": "../resources/emojis/trueshred.gif", 
  ":upvote:": "../resources/emojis/upvote.png",
  ":upvote-reddit:": "../resources/emojis/upvote-reddit.png", 
  ":voredoor:": "../resources/emojis/voredoor.png", 
  ":votedown:": "../resources/emojis/votedown.png", 
  ":wyatt2:": "../resources/emojis/wyatt2.png", 
  ":wyatt3:": "../resources/emojis/wyatt3.png", 
  ":wyattPog:": "../resources/emojis/wyattPog.png", 
  ":YAMERO:": "../resources/emojis/YAMERO.gif", 
  ":YOOO:": "../resources/emojis/YOOO.png", 
  ":YOOOOOO:": "../resources/emojis/YOOOOOO.png", 
  ":youtube:": "../resources/emojis/youtube.png",

}

const mostReactedMessages = {
  data() {
    return {
      jacobStr: 'lfg (11),lfg (11),upvote (10),drake (11),upvote (9),drake (11),bigdrake1 (11),bigdrake2 (11),trueshred (10),bigdrake3 (11),bigdrake4 (11),😤 (9),YOOO (9),elaineDance (9),voredoor (8),troll (9),goopie (8),🇩 (2),🇦 (2),🇧 (2)',
      russellStr: 'lfg (7),upvote (8),❤️ (7),intensifeyes (7),wyattPog (7),👍 (7),trueshred (7),drake (7),chad (7),dogeKek (8),BarryBustaNutBenson (7),YAMERO (7),😫 (8),😩 (7),💯 (7),YOOOOOO (7),blushcat (7),kirby (7),partyparrot (7),ranbowfrog (7)',
      kianStr: 'upvote (7),😱 (7),🥭 (7),YAMERO (7),😩 (7),🍔 (7),ahegao1 (7),sonervous (7),cum (7),🤢 (7),💯 (6),kylecum (7),joe (7),dab (7),Nora (7),ahriHeart (7),partyparrot (7),PogBreathing (7),wyatt2 (7),lfg (7)',
      sergeiStr: 'upvote (10),cheeto (9),⬛ (5),downvote (7),Downvote (7),👎 (6),downvote (7),downvote (7),Downvote (7),downvote (7),downvote (7),downvote (7),downvote (6),davithumbsdown (6),👇 (7),dabThumbsDown (6),votedown (6),🔻 (5),🔽 (5),⬇️ (6)',
      ethanStr: '😋 (6),🔜 (6),🤰 (6),🕺 (6),🍑 (6),🤺 (6),snek (6),kass (6),wyatt2 (6),smug1 (6),wyatt3 (6),bea (6),kale (6),swastika (6),ahegao1 (6),Doubt1 (6),pizza (5),sonervous (6),markwood (6),themeaning (6)',
      wyattStr: 'votedown (17),downvote (15),downvote (15),downdoot (15),downvote (15),downvote (10),Downvote (10),downvote (10),downvote (10)',
      jacobReacts: [],
      russellReacts: [],
      kianReacts: [],
      sergeiReacts: [],
      ethanReacts: [],
      wyattReacts: [],
    }
  },
  mounted() {
    this.jacobReacts = strToReacts(this.jacobStr);
    this.russellReacts = strToReacts(this.russellStr);
    this.kianReacts = strToReacts(this.kianStr);
    this.sergeiReacts = strToReacts(this.sergeiStr);
    this.ethanReacts = strToReacts(this.ethanStr);
    this.wyattReacts = strToReacts(this.wyattStr);
    console.log(this.russellReacts);  
    
    setTimeout(s => enableTooltips(), 100);
  },
  methods: {

  }
}

function strToReacts(str) {
  pairs = str.split(",");
  reacts = [];
  pairs.forEach(pair => {
    [emoji, count] = pair.split(" ");
    if (emoji.length > 2) // on our data, this means it's custom
      emoji = ":" + emoji + ":"
    count = count.substring(1, count.length-1);
    reacts.push([emoji, count, map[emoji]]);
  });
  return reacts;
}

Vue.createApp(mostReactedMessages).mount("#reactedMessagesApp")

const emojisLeaderboard = {
  data() {
    return {
      currentlySpam: true,
      active: [
        ["1.", ":youtube:", "6,461"],
        ["2.", ":spotify:", "887"],
        ["3.", ":YOOOOOO:", "403"],
        ["4.", ":kill:", "217"],
        ["5.", "👍", "199"],
      ],
      totalActive: "12,725",
      totalHidden: "4,891",
      hidden: [
        ["1.", ":YOOOOOO:", "403"],
        ["2.", ":kill:", "216"],
        ["3.", ":gunright:", "171"],
        ["4.", ":lfg:", "165"],
        ["5.", ":trueshred:", "164"],
      ]
    }
  },
  methods: {
    toggleSpam() {
      temp = this.active;
      this.active = this.hidden;
      this.hidden = temp;

      this.currentlySpam = !this.currentlySpam;

      [this.totalActive, this.totalHidden] = [this.totalHidden, this.totalActive];
      setTimeout(() => {
        enableTooltips();
      }, 100)
    },
    map(key) {
      return map[key]
    }
  }
};
Vue.createApp(emojisLeaderboard).mount("#emojisApp")

const reactsLeaderboard = {
  data() {
    return {
      currentlySpam: true,
      active: [
        ["1.", ":upvote:", "3,778"],
        ["2.", "🎲", "1,142"],
        ["3.", ":downvote:", "884"],
        ["4.", ":lfg:", "555"],
        ["5.", "👋", "377"],
      ],
      totalActive: "18,165",
      totalHidden: "13,470",
      hidden: [
        ["1.", ":upvote:", "3,297"],
        ["2.", ":downvote:", "857"],
        ["3.", ":lfg:", "502"],
        ["4.", "📌", "250"],
        ["5.", ":shredward:", "247"],
      ]
    }
  },
  methods: {
    toggleSpam() {
      temp = this.active;
      this.active = this.hidden;
      this.hidden = temp;

      this.currentlySpam = !this.currentlySpam;

      [this.totalActive, this.totalHidden] = [this.totalHidden, this.totalActive];
    },
    map(key) {
      return map[key]
    }
  }
};
Vue.createApp(reactsLeaderboard).mount("#reactionsApp")

const combinedLeaderboard = {
  data() {
    return {
      currentlySpam: true,
      active: [
        ["1.", ":upvote:", "3,795"],
        ["2.", "🎲", "1,142"],
        ["3.", ":downvote:", "892"],
        ["4.", ":lfg:", "730"],
        ["5.", ":shredward:", "378"],
        // ["5.", ":trueshred:", "328"],
      ],
      totalActive: "18,165",
      totalHidden: "13,470",
      hidden: [
        ["1.", ":upvote:", "3,310"],
        ["2.", ":downvote:", "862"],
        ["3.", ":lfg:", "667"],
        ["4.", ":shredward:", "347"],
        ["5.", ":trueshred:", "314"],
      ]
    }
  },
  methods: {
    toggleSpam() {
      temp = this.active;
      this.active = this.hidden;
      this.hidden = temp;

      this.currentlySpam = !this.currentlySpam;

      [this.totalActive, this.totalHidden] = [this.totalHidden, this.totalActive];
      setTimeout(() => {
        enableTooltips();
      }, 100)
    },
    map(key) {
      return map[key]
    }
  }
};
Vue.createApp(combinedLeaderboard).mount("#combinedApp")


var tooltipList;

function enableTooltips() {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

  tooltipList = tooltipTriggerList.map(
    function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
};

enableTooltips();