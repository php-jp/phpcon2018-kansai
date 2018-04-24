<template>
  <div class="home-Sponsor">
    <div class="home-Sponsor_Wave"></div>
    <div class="st-Container">
      <h2 class="home-Sponsor_Title">SPONSOR</h2>
      <p class="home-Sponsor_Description">初心者から上級者まで楽しめるセッションが目白押し！これから始めようと思っていたフレームワークや、気になっていた技術についての情報が得られるかも！？</p>
      <div class="home-Sponsor_Sponsor">
        <div class="home-Sponsor_Platinum">
          <h3>プラチナスポンサー</h3>
          <a class="home-Sponsor_Large" v-for="(sponsor,index) in platinum" :key="index" :href="sponsor.link" target="_blank">
            <img class="home-Sponsor_Image" :src="'/images/sponsors/platinum/'+sponsor.image" alt="">
          </a>
        </div>
        <div class="home-Sponsor_Gold">
          <h3>ゴールドスポンサー</h3>
          <a class="home-Sponsor_Medium" v-for="(sponsor,index) in gold" :key="index" :href="sponsor.link" target="_blank">
            <img class="home-Sponsor_Image" :src="'/images/sponsors/gold/'+sponsor.image" alt="">
          </a>
        </div>
        <div class="home-Sponsor_Silver">
          <h3>シルバースポンサー</h3>
          <a class="home-Sponsor_Small" v-for="(sponsor,index) in silver" :key="index" :href="sponsor.link" target="_blank">
            <img class="home-Sponsor_Image" :src="'/images/sponsors/silver/'+sponsor.image" alt="">
          </a>
        </div>
        <div class="home-Sponsor_Media">
          <h3>メディアスポンサー</h3>
          <a class="home-Sponsor_Small" v-for="(sponsor,index) in media" :key="index" :href="sponsor.link" target="_blank">
            <img class="home-Sponsor_Image" :src="'/images/sponsors/media/'+sponsor.image" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed:{
      platinum(){
        return this.$store.state.sponsors.platinum
      },
      gold(){
        return this.$store.state.sponsors.gold
      },
      silver(){
        return this.$store.state.sponsors.silver
      },
      media(){
        return this.$store.state.sponsors.media
      },
    }
  }
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
      width: 100%
    }
  }
</style>
