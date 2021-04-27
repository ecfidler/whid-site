path = 'data/'

totalChans = 21

function getJoinDate(name) {
  fetch(path + 'join_date.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      joinDate = new Date(data['Date'][name]).toLocaleDateString('en-US');
    });
}

function getFirstMsg(name) {
  fetch(path + 'first_message.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      firstDate = new Date(data['Date'][name]).toLocaleDateString('en-US');
      firstMsg = data['Content'][name]
      firstMsgImg = data['Attachments'][name]

      if (firstMsgImg == null)
        firstMsgImg = ''
      if (firstMsg == null)
        firstMsg = ''
    });
}

function getMsgsSent(name) {
  fetch(path + 'num_msg_sent.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      msgsSent = comma(data[name])
    });
}

function getChanCount(name) {
  fetch(path + 'num_chan_part.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      chanCount = comma(data[name])
    });
}

function getChanCount(name) {
  fetch(path + 'num_chan_part.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      chanCount = comma(data[name])
    });
}

function getEmojiCount(name) {
  fetch(path + 'num_emojis.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      emojiCount = comma(data[name])
    });
}

function getMostReaction(name) {
  fetch(path + 'most_reaction.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      mostReact = data['reaction'][name]
      mostReactCount = comma(data['count'][name])
    });
}

function getVoteCounts(name) {
  fetch(path + 'num_votes.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      upvoteCount = comma(data['upvotes'][name])
      downvoteCount = comma(data['downvotes'][name])
    });
}

function getLastMsg(name) {
  fetch(path + 'last_messages.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      lastMessage = data['Content'][name]
      lastMsgImg = data['Attachments'][name]
      lastMsgDate = new Date(data['Date'][name]).toLocaleDateString('en-US');


      if (lastMessage == null)
        lastMessage = ''
      if (lastMsgImg == null)
        lastMsgImg = ''
      if (lastMsgDate == null)
        lastMsgDate = ''
    });
}

function getFavChannel(name) {
  fetch(path + 'fav_channel.json')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      favChan = "#" + data['channel'][name]
      favChanNum = comma(data['count'][name])
    });
}

function loadData(name) {  
  getJoinDate(name)
  getFirstMsg(name)

  getMsgsSent(name)
  getChanCount(name)

  // favChan = "#do"
  // favChanNum = comma(6000)
  getFavChannel(name)

  getEmojiCount(name)

  getVoteCounts(name)

  getMostReaction(name)

  // lastMsgImg = false
  // lastMessage = 'Bullshit'
  // lastMsgImg = '../resources/emojis/upvote.png'
  // lastMessage = 'pain!'
  // lastMsgDate = '04/04/0444'
  getLastMsg(name)

}

function comma(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const namelist = {
  data() {
    return {
      buttonDisabled: false,
      show: false,
      name: '',
      nameDisplay: '',
      names: [
        'fops#1969', 'bebenebenebeb#8098', 'El Jefe#5223', 'noss#0773',
       'Duhiggles#6156', 'TheInfinity#3826', 'SilentKON#2259',
       'Chris63479#5104', 'Sharkwood#8876', '1Ranger1#1543', 'God#9608',
       'Lindsey#2249', 'Russell#0104', 'TewLewdBot#4649',
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
       'Qwerty239#0239', 'Joe Hoffman#8959', 'AltKkSlider#8841',
       'misterwheatley#9001', 'Unanimism#7785', 'CoolGreenRock#8683',
       'Juat a Loser#6844', 'Parker#9730', 'Ross#1197', 'LowLander#0951',
       'lilbailz#4577', 'Baneling#0649', 'Cannoli#2498',
       'nboggs0329#8973', 'Plurpl#8977', 'DiMA#0758', 'MIAMI#3739',
       'Lightning/NickSanta#1279', 'Mr. Sloan - The Sequel#8053',
       'tonorage#5807', 'neco#1263', 'морковь#1224', 'YTR#7537',
       'Smoogle Translate#1934', 'Bricks#7387', 'TOTO-chan#6994',
       'StoneyB#7329', 'Daru#3879', '마족해골#2098', 'W_ToXiiK#9995',
       'castlesix#3791', 'Lili리리#2910', 'housyun#0417', '2예잇#7295',
       'vcom#8774', 'MINUS#0040', 'Pin_A#5175', 'pirikara#3452',
       'YUCA#3923', 'kiki#3230', '리넬#5245', 'BTYink#2758', '이라#0086',
       'superfaster#5322', 'Skechobi#2021', 'NuClear_DyN4Mite#0127',
       'Jarwarfare#9845', '뚀뚀CherrY#4718', '아스타드/astard#6776',
       'badger542#0029', 'DARLING#2867', 'emmaeif14#3164',
       'sapphire#6342', 'bby_reina-(レイナ)-#3576', 'sss_sss#9810',
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
       '【=◈︿◈=】Big MAn 【=◈︿◈=】#3141', 'Himbo9000#0290', 'Greenedar#8008',
       'EriAndo#5096', 'luckypeachie#5765', 'AELR#6890', 'elif#5004',
       'BigDWH14#2911', 'Kim Jah Un#1827', 'min#1473', '__lopunny#9908',
       'keylimelover#9457', 'Loki#7440', 'Eean the Bean#4198',
       'Ο άγγελός μου♡#0831'],
      messagesSent: -1,
      channelUseCount: -1,
      emojiCount: -1,
      upvotes: -1,
      downvotes: -1,

      mostReceivedReact: 'h',
      joinDate: 'e',
      lastMessage: 'l',
      firstMsgDate: 'p',

      today: '',

      msgDelay: 1.6,
      // msgDelay: 0.01,

      messagesActive: [],
      messages: [],

      msgDone: false,

      wstatsActive: [],
      wstats: [],

      final: false,
      final2: false,
      final3: false,
      final4: false,
      final5: false,
      final6: false,

      showthanks: false,

      lastMessage: '',
      lastMsgImg: false,
      lastMsgDate: '',
    }
  },
  methods: {
    inputButtonPressed() {
      if (this.names.includes(this.name)) {
        this.nameDisplay = this.name;
        this.show = true;
        this.loadData(this.name);
        this.buttonDisabled = true;
        setTimeout(() => {
          this.constructMessages();
        }, 1100);
      } else {
        console.log('invalid input')
      }
    },
    loadData(name) {
      loadData(name)
      setTimeout(() => {
        this.mostReceivedReact = mostReact
        this.mostReceivedReactCount = mostReactCount
        this.lastMessage = lastMessage
        this.lastMsgImg = lastMsgImg
        this.lastMsgDate = lastMsgDate
        this.firstMsgDate = firstDate
      }, 1000);
    },
    afterFirstEnter() {
      this.constructStats();
      setTimeout(() => {
        this.messagesActive = this.messages;
      }, 500)

    },
    afterSecondEnter() {
      setTimeout(() => {
        this.msgDone = true;
        setTimeout(() => {
          this.wstatsActive = this.wstats;
        }, 1000);
      }, 1000 * this.msgDelay * this.messages.length)
    },
    afterThirdEnter() {
      setTimeout(() => {
        this.final = true
        setTimeout(() => {
          this.final2 = true
          setTimeout(() => {
            this.final3 = true
            setTimeout(() => {
              this.final4 = true
              setTimeout(() => {
                this.final5 = true
                setTimeout(() => {
                  this.final6 = true
                  setTimeout(() => {
                    this.constructThankyou()
                  }, 1500)
                }, 1000)
              }, 1000)
            }, 1000)
          }, 1500)
        }, 1000)
      }, 1000 * this.msgDelay * this.wstats.length)
    },
    constructMessages() {
      this.messages = [
        [0, "looks like...",],
        [1, "you joined on ", joinDate, ""],
        [0, "also,",],
        [1, "your first message was on ", firstDate, ""],
        [0, firstDate == joinDate ? "pretty speedy there huh?" : "took your sweet time with that didn't you?"],
        [0, "let's see what it said"],
        [0, "i hope it wasn't embarrasing 😳"],
        [0, "ah, here it is."],
        [0, "it said:"],
        [2, firstMsg, firstMsgImg],
        [0, ""],
        [0, "hmm. what else...",],
        [1, "ah! you've sent ", msgsSent, " messages.",],
        [1, "that's across ", chanCount, " of our " + totalChans + " channels.",],
        [0, chanCount != totalChans ? "those other channels miss you 😔" : "woah 😮",],
        [0, "",],
        [0, "oh check this out:",],
        [1, "it looks like ", favChan, " is your favorite channel",],
        [1, "cause you've sent ", favChanNum, " messages there.",],
        [0, "not too bad!",],
      ]
    },
    styleMessage(val) {
      var style = {};
      if (val === 1)
        style.fontSize = '2rem';
      else
        style.fontSize = '1.25rem';

      return style
    },
    constructStats() {
      this.wstats = [
        ["used", emojiCount, "emojis"],
        ["received", upvoteCount, "upvotes"],
        ["and endured", downvoteCount, "downvotes."],
      ]
    },
    constructThankyou() {
      this.showthanks = true;
    },


    beforeEnter(el) {
      el.style.opacity = 0
      gsap.to(el, { y: 20 })
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        delay: el.dataset.index * this.msgDelay,
        onComplete: done,
        y: 0,
      })
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        delay: el.dataset.index * 1,
        onComplete: done
      })
    }
  },
  mounted() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    this.today = mm + '/' + dd + '/' + yyyy;
  }
};

Vue.createApp(namelist).mount('#whydApp')