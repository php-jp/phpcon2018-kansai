<template>
  <div class="home-Access">
    <div class="home-Access_Wave"></div>
    <div class="st-Container">
      <h2 class="home-Access_Title">BLOG</h2>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: {lat: 34.705988, lng: 135.494489},
      marker: {
        label: {
          //            color: 'black',
          //            text: 'PHPCON KANSAI 2018 HERE',
        },
        position: {
          lat: 34.705988,
          lng: 135.494489,
        },
      },
    };
  },
  methods: {
    ready() {
      // this.$refs.map.resize()
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/library/_variable.scss";
@import "~assets/scss/library/_mixin.scss";

.home-Access {
  padding: 70px 0 70px 0;
  width: auto;
  background-color: $clr_main;

  &_Wave {
    width: 100%;
    height: 20px;
    background-image: url("~/assets/images/wavyLine-keyColor.png");
    background-repeat: repeat-x;
    background-size: contain;
    position: relative;
    top: -90px;
  }

  &_Title {
    @include secTitle;
    margin-bottom: 30px;
  }

  &_mapImage {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;
    img {
      width: 100%;
    }
    @include desktop() {
      width: 80%;
    }
  }

  &_Map {
    max-width: 900px;
    width: 100%;
    height: 250px;
    margin: 0 auto;
    margin-bottom: 15px;
    /*background: #ccc;*/

    @include desktop() {
      margin-bottom: 30px;
      height: 400px;
    }
  }

  &_Description {
    margin-bottom: 30px;
  }

  &_Place {
    margin-bottom: 20px;
  }

  &_Address {
    margin-bottom: 30px;
  }

  &_Warn {
  }

  &_Google,
  &_Detail {
    @include button;
    margin: 0 5px 10px 5px;
    width: 200px;
    @include desktop() {
      margin: 0 0 10px 5px;
    }
  }
}
</style>
