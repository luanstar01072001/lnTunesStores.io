new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Adios",
          artist: "Everglow",
          cover: "img/Adios.png",
          source: "mp3/Adios.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/Adios%20-%20Everglow.html",
          favorited: false
        },
        {
          name: "All With You",
          artist: "Tae Yeon",
          cover: "img/AllWithYou.png",
          source: "mp3/AllWithYou.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/AllWithYou(Taeyeon).html",
          favorited: true
        },
        {
          name: "Always",
          artist: "Yoonmirae",
          cover: "img/Always.png",
          source: "mp3/Always.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/Always%20(OST%20Descendants%20Of%20The%20Sun)%20-%20Yoon%20Mirae.html",
          favorited: true
        },
        {
          name: "As If It's Your Last",
          artist: "Black Pink",
          cover: "img/AsIfItYourLast.png",
          source: "mp3/AsIfItYourLast.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/As%20If%20It's%20Your%20Last(BlackPink).html",
          favorited: false
        },
        {
          name: " Back In Time",
          artist: "Lyn",
          cover: "img/BackInTime.png",
          source: "mp3/BackInTime.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/Back%20In%20Time%20(The%20Moon%20Embracing%20The%20Sun%20OST)%20-%20Lyn.html",
          favorited: false
        },
        {
          name: "Bad Boy",
          artist: "Red Velvet",
          cover: "img/BadBoy.png",
          source: "mp3/BadBoy.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/Bad%20Boy%20-%20Red%20Velvet.html",
          favorited: true
        },
        {
          name: "Bambi",
          artist: "Baekhyun",
          cover: "img/Bambi.png",
          source: "mp3/Bambi.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/Bambi(Baekhyun).html",
          favorited: false
        },
        {
          name: "Boy With Luv",
          artist: "BTS",
          cover: "img/BoyWithLuv.png",
          source: "mp3/BoyWithLuv.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/Boy%20With%20Luv(BTS).html",
          favorited: true
        },
        {
          name: "Butter",
          artist: "BTS",
          cover: "img/Butter.png",
          source: "mp3/Butter.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/Butter(BTS).html",
          favorited: false
        },
        {
          name: "Celebrity",
          artist: "IU",
          cover: "img/Celebrity.png",
          source: "mp3/Celebrity.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/CelebrityIU.html",
          favorited: false
        },
        {
          name: "Cry For Me",
          artist: "Twice",
          cover: "img/CryForMe.png",
          source: "mp3/CryForMe.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/CryForMe(Twice).html",
          favorited: false
        },
        {
          name: "Divine",
          artist: "SNSD",
          cover: "img/Divine.png",
          source: "mp3/Divine.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/Divine(SNSD).html",
          favorited: false
        },
        {
          name: "Don't Know What To Do",
          artist: "Black Pink",
          cover: "img/DonTKnowWhatToDo.png",
          source: "mp3/DonKnowWhatToDo.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/Don'T%20Know%20What%20To%20Do%20-%20BlackPink.html",
          favorited: false
        },
        {
          name: "Done For Me",
          artist: "Punch",
          cover: "img/DoneForMe.png",
          source: "mp3/DoneForMe.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/Done%20For%20Me(Punch).html",
          favorited: false
        },
        {
          name: "Dynamate",
          artist: "BTS",
          cover: "img/Dyanamite.png",
          source: "mp3/Dynamate.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/Dynamite(BTS).html",
          favorited: false
        },
        {
          name: "Celebrity",
          artist: "IU",
          cover: "img/Celebrity.png",
          source: "mp3/Celebrity.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/CelebrityIU.html",
          favorited: false
        },
        {
          name: "Celebrity",
          artist: "IU",
          cover: "img/Celebrity.png",
          source: "mp3/Celebrity.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/CelebrityIU.html",
          favorited: false
        },
        {
          name: "Celebrity",
          artist: "IU",
          cover: "img/Celebrity.png",
          source: "mp3/Celebrity.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/CelebrityIU.html",
          favorited: false
        },
        {
          name: "Celebrity",
          artist: "IU",
          cover: "img/Celebrity.png",
          source: "mp3/Celebrity.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/CelebrityIU.html",
          favorited: false
        },
        {
          name: "Celebrity",
          artist: "IU",
          cover: "img/Celebrity.png",
          source: "mp3/Celebrity.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/CelebrityIU.html",
          favorited: false
        },
        {
          name: "Celebrity",
          artist: "IU",
          cover: "img/Celebrity.png",
          source: "mp3/Celebrity.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/CelebrityIU.html",
          favorited: false
        },
        {
          name: "Celebrity",
          artist: "IU",
          cover: "img/Celebrity.png",
          source: "mp3/Celebrity.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/CelebrityIU.html",
          favorited: false
        },
        {
          name: "Celebrity",
          artist: "IU",
          cover: "img/Celebrity.png",
          source: "mp3/Celebrity.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/CelebrityIU.html",
          favorited: false
        },
        {
          name: "Celebrity",
          artist: "IU",
          cover: "img/Celebrity.png",
          source: "mp3/Celebrity.mp3",
          url: "https://luanstar01072001.github.io/lnTunesStore.github.io/Infomation/CelebrityIU.html",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if (this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function () {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function () {
      vm.generateTime();
    };
    this.audio.onended = function () {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});