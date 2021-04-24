var canvas = document.getElementById('header_canvas');
var count = 200;
var defaults = {
  origin: { y: 0.5 }
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
                    'good times', '𝓗𝓮𝓪𝓿𝓮𝓷', 'movies', 'dubs', 'Ls'],
        }
    },
    mounted() {
        this.words = shuffleExceptFirst(this.words)
        setInterval(() => {
            if(this.name2 === true) {
                this.counter1 = this.counter2 + 1;
                this.name1 = true;
                this.name2 = false;
            } else {
                this.counter2 = this.counter1 + 1;
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

const messageLeaderboard = {
  data() {
    return {
      currentlySpam: true,
      active: [
        ["bebenebenebeb#8098",  "25,149"],
        ["El Jefe#5223",        "20,433"],
        ["Rythm#3722",          "19,974"],
        ["fops#1969",           "16,942"],
        ["Us#0704",             "12,685"],
      ],
      hidden: [
        ["El Jefe#5223",        "12,492"],
        ["bebenebenebeb#8098",  "11,235"],
        ["fops#1969",           "9,956"],
        ["noss#0773",           "7,592"],
        ["Sharkwood#8876",      "4,962"],
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

map = {
  "🎲": "https://twemoji.maxcdn.com/v/latest/72x72/1f3b2.png",
  "👋": "https://twemoji.maxcdn.com/v/latest/72x72/1f44b.png",
  "📌": "https://twemoji.maxcdn.com/v/latest/72x72/1f4cc.png",
  "👍": "https://twemoji.maxcdn.com/v/latest/72x72/1f44d.png",
  ":upvote:": "../resources/emojis/upvote.png",
  ":downvote:": "../resources/emojis/downvote.png",
  ":lfg:": "../resources/emojis/lfg.png",
  ":shredward:": "../resources/emojis/shredward.png",
  ":yoooooo:": "../resources/emojis/yoooooo.png",
  ":gunright:": "../resources/emojis/gunright.png",
  ":kill:": "../resources/emojis/kill.png",
  ":youtube:": "../resources/emojis/youtube.png",
  ":spotify:": "../resources/emojis/spotify.png",
  ":trueshred:": "../resources/emojis/trueshred.gif",
}

const emojisLeaderboard = {
  data() {
    return {
      currentlySpam: true,
      active: [
        ["1.", ":youtube:",   "6,461"],
        ["2.", ":spotify:",   "887"],
        ["3.", ":yoooooo:",   "403"],
        ["4.", ":kill:",      "217"],
        ["5.", "👍",  "199"],
      ],
      totalActive: "12,725",
      totalHidden: "4,891",
      hidden: [
        ["1.", ":yoooooo:",   "403"],
        ["2.", ":kill:",      "216"],
        ["3.", ":gunright:",  "171"],
        ["4.", ":lfg:",       "165"],
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
        ["1.", ":upvote:",    "3,778"],
        ["2.", "🎲",          "1,142"],
        ["3.", ":downvote:",  "884"],
        ["4.", ":lfg:",       "555"],
        ["5.", "👋",          "377"],
      ],
      totalActive: "18,165",
      totalHidden: "13,470",
      hidden: [
        ["1.", ":upvote:",    "3,297"],
        ["2.", ":downvote:",  "857"],
        ["3.", ":lfg:",       "502"],
        ["4.", "📌",          "250"],
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
        ["1.", ":upvote:",    "3,795"],
        ["2.", "🎲",          "1,142"],
        ["3.", ":downvote:",  "892"],
        ["4.", ":lfg:",       "730"],
        ["5.", ":shredward:", "378"],
        // ["5.", ":trueshred:", "328"],
      ],
      totalActive: "18,165",
      totalHidden: "13,470",
      hidden: [
        ["1.", ":upvote:",  "3,310"],
        ["2.", ":downvote:",  "862"],
        ["3.", ":lfg:",  "667"],
        ["4.", ":shredward:",  "347"],
        ["5.", ":trueshred:",  "314"],
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
Vue.createApp(combinedLeaderboard).mount("#combinedApp")


const namelist = {
  data() {
    return {
      name:'',
      names:[
        'fops#1969', 'bebenebenebeb#8098', 'El Jefe#5223', 'noss#0773',
        'Duhiggles#6156', 'TheInfinity#3826', 'SilentKON#2259',
        'Chris63479#5104', 'Sharkwood#8876', 'XxxOilBaron69xxX#1543',
        'God#9608', 'Lindsey#2249', 'Russell#0104', 'TewLewdBot#4649',
        'TewLoudBot#2158', 'walnut#4682', 'honeynut#6170',
        'MrGreekGuy#8958', 'thedonutboy#6840', 'FunnyMan18#4662',
        'lizard#4410', 'larce#7703', 'daxaustin#3727', 's1natra#8122',
        'tortellini1080p#6416', 'RSGIV#9400', 'Willbur_Winter#4614',
        'woof#0292', 'lbrodsky#4660', 'Klankyer#7717', "Matt'#5058",
        'kevinchap3#0245', 'Cobber#8143', 'Ca$h Naylor#7843',
        'Elefatante#4267', 'nslatt14#8406', 'BicMitchum#0101',
        'stlcardsfan18#8037', 'Strap#9719', 'Noah Amsterdam#1248',
        'Saturn#3536', 'Cubiq#1112', 'BrosefStalin420#4289',
        '[DEAD] Rebel Ben#3223', 'help#6355', 'Us#0704', 'Nick Chubb#2838',
        'GPuzzle#1804', 'Kyle#9706', 'FrostedWheats#2667', 'Yoni#3150',
        'RightThumbAction#9031', 'Baru#1534', 'Bertle#9579',
        '12brendan3#1337', 'Shigure#7773', 'NotSoBot#9555',
        'JermaBot#0785', 'SimplyNotorious#3665', 'Hackerbot-Testing#4493',
        'FredBoat♪♪#7284', 'kB.Stauxic#4364', 'Dad Bot#6455',
        'Mii-Sama#3255', 'Hackerbot#7196', 'valarias_james#1780',
        'Shigutest#1513', 'Turtle#1875', 'Japandroid#5043',
        'Screenshare#7248', 'Rythm#3722', 'St.RobinHawk#1011',
        'Aplvan18#2614', 'NanoNova#9281', 'Gladiate#1867', 'Atgame#0053',
        'Chief#9806', 'PRiNGER#6732', 'Bolty#2055', 'Shappell#1520',
        'SwervyKillz#9201', 'Twigai#1731', 'Mr. Sloan#8042',
        'Jerma Testing#7969', 'Perlymolt#9395', 'RTFM#1338',
        'Cobouyz#8879', 'Joe1508#1317', 'ckiz#8641', 'SergeiLNL#8685',
        'Qwerty239#2392', 'Joe Hoffman#8959', 'AltKkSlider#8841',
        'misterwheatley#9001', 'Unanimism#7785', 'CoolGreenRock#8683',
        'Juat a Loser#6844', 'Parker#9730', 'Ross#1197', 'LowLander#0951',
        'lilbailz#4577', 'Baneling#0649', 'Turbo Man!#2498',
        'nboggs0329#8973', 'Plurpl#8977', 'DiMA#0758', 'MIAMI#3739',
        'Lighting/NickSanta#1279', 'Mr. Sloan - The Sequel#8053',
        'tonorage#5807', 'neco#1263', 'морковь#1224', 'YTR#7537',
        'Smoogle Translate#1934', 'Bricks#7387', 'TOTO-chan#6994',
        'StoneyB#7329', 'Daru#3879', '마족해골#2098', 'W_ToXiiK#9995',
        'castlesix#3791', 'Lili리리#2910', 'housyun#0417', '아크#7295',
        'vcom#8774', 'MINUS#0040', 'Pin_A#5175', 'pirikara#3452',
        'YUCA#3923', 'kiki#3230', '리넬#5245', 'BTYink#2758', '이라#0086',
        'superfaster#5322', 'Skechobi#2021', 'NuClear_DyN4Mite#0127',
        'Jarwarfare#9845', '뚀뚀CherrY#4718', '아스타드/astard#6776',
        'badger542#0029', 'DARLING#2867', 'emmaeif14#3164',
        'hexorcist#6342', 'bby_reina-(レイナ)-#3576', 'sss_sss#9810',
        'VanillaCat#1061', 'Demon court#6763', 'GrayKiwi#8386',
        'RGB電競佛珠#0740', 'ShootingKing#6973', 'Von#1455', '鬼漾漾OwO#0676',
        'めい#7784', 'TOTO-chan#7781', '산타할머니(메세지안봄)#9715',
        'Bisu-룡이♡-크리스티아♡<이블린>#9014', 'Cousin Joe#1117', '네즈#6711',
        '식용잡초#8240', 'Mutineer#0187', 'GabeFaceNoSpace#6101',
        'lowball6133#8160', 'Lyrunis#2963', 'MakoCho#0808', 'Tris#3443',
        'neco#0560', 'noty_shoty_gamer#1233', 'Slaptastical#6424',
        'LARD OF THE SEA#4206', 'aermo#9106', 'tamonJP#9217',
        'Safety manager#5145', 'NamGom#3673', 'Cygnus X-1#5240',
        'Joekill33#1287', 'MEB-cool#2035', 'Trickstr456#7428',
        'SensualK#4406', 'LucasTheAllKnowing#2014',
        '【=◈︿◈=】Big MAn 【=◈︿◈=】#3141', 'AhegaoMyEggo#0290',
        'Greenedar#8008', 'EriAndo#5096', 'luckypeachie#5765', 'AELR#6890',
        'elif#5004', 'BigDWH14#2911', 'Kim Jah Un#1827', 'min#1473',
        'Qwerty239#0239', '__lopunny#9908', 'keylimelover#9457']
	  }
  }
};

Vue.createApp(namelist).mount('#listApp')
