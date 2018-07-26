<template>
  <div class="home-Sponsor">
    <div class="home-Sponsor_Wave"></div>
    <div class="st-Container">
      <h2 class="home-Sponsor_Title">SPONSOR</h2>

         <div class="secSponsor_video">
            <video src="images/video/phpconf2018rest.mp4" loop="" controls="" id="motionAnm" poster="images/video/phpvideo1.png"></video>
          </div>

         <div class="secSponsor_video">
            <video src="images/video/phpconf2018OP.mp4" loop="" controls="" id="motionAnm" poster="images/video/phpvideo2.png"></video>
          </div>

<div class="video_text">
            <p>Motion Graphics by Chige</p>
          </div>

    </div>
  </div>
</template>

<script>
export default {
  computed: {
    platinum() {
      return this.$store.state.sponsors.platinum;
    },
    gold() {
      return this.$store.state.sponsors.gold;
    },
    silver() {
      return this.$store.state.sponsors.silver;
    },
    media() {
      return this.$store.state.sponsors.media;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/library/_variable.scss";
@import "~assets/scss/library/_mixin.scss";

.home-Sponsor {
  padding: 70px 0 70px 0;
  width: auto;
  background: $clr_baseDark;

  &_Wave {
    width: 100%;
    height: 20px;
    background-image: url("~/assets/images/wavyLine-dark.png");
    background-repeat: repeat-x;
    background-size: contain;
    position: relative;
    top: -90px;
  }

  &_Title {
    @include secTitle;
  }

  &_Description {
    max-width: 770px;
    width: 100%;
    margin: 0 auto;
    padding: 0 0 30px 0;
  }

  &_Large {
    display: inline-block;
    max-width: 330px;
    width: 100%;
    margin: 0 5px 30px 5px;
    cursor: pointer;

    @include desktop() {
      max-width: 440px;
      margin: 0 15px 40px 15px;
    }
  }

  &_Medium {
    display: inline-block;
    max-width: 150px;
    width: 100%;
    margin: 0 5px 5px 5px;
    cursor: pointer;

    @include desktop() {
      max-width: 215px;
      margin: 0 10px 15px 10px;
    }
  }

  &_Small {
    display: inline-block;
    max-width: 100px;
    width: 100%;
    cursor: pointer;
    margin: 0 5px 5px 5px;

    @include desktop() {
      max-width: 150px;
      margin: 0 10px 15px 10px;
    }
  }

  &_Image {
    width: 100%;
  }
}

video {
  width: 100%;
  max-width: 800px;
  object-fit: contain;
  margin: 30px auto 0;
}

.video_text {
  margin: 20px auto 40px;
  color: #fff;
}
</style>
