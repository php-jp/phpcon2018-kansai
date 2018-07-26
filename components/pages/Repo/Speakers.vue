<template>
  <div class="home-TimeTable">
    <div class="home-TimeTable_Wave"></div>
    <div class="st-Container">
      <h2 class="home-TimeTable_Title">TALKS</h2>
      <p class="home-TimeTable_Description">初心者から上級者まで楽しめるセッションが目白押し！これから始めようと思っていたフレームワークや、気になっていた技術についての情報が得られるかも！？</p>
      <div class="home-TimeTable_Speakers">
          <div class="home-TimeTable_SpeakersItem" v-for="(speaker,index) in $store.state.speakers" :key="index">
            <img class="home-TimeTable_SpeakerImg" :src="'/images/speakers/'+speaker.image" alt="">
            <div class="home-TimeTable_SpeakerName" >{{speaker.name}}</div>
            <div class="home-TimeTable_SpeakerTitle" >{{speaker.title}}</div>
            <div class="home-TimeTable_SpeakerSubtitle" >{{speaker.subtitle}}</div>

          </div>
      </div>
      <div class="home-TimeTable_Link">
        <a href="https://twitter.com/phpcon_kansai" target="_blank" class="home-TimeTable_Anchor">
          <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
          <span>&nbsp;タイムテーブルを確認</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "~assets/scss/library/_variable.scss";
  @import "~assets/scss/library/_mixin.scss";

  .home-TimeTable {
    padding: 70px 0 70px 0;
    width: auto;
    background: $clr_baseWhite;

    &_Wave {
      width: 100%;
      height: 20px;
      background-image: url("~/assets/images/wavyLine-white.png");
      background-repeat: repeat-x;
      background-size: contain;
      position: relative;
      top: -90px;
    }

    &_Title {
      @include secTitle;
      color: $clr_base;
    }

    &_Description {
      max-width: 770px;
      width: 100%;
      margin: 0 auto;
      padding: 0 0 50px 0;
      color: $clr_base;
    }

    &_Speakers {
      color: $clr_base;
      display: flex;
    }

    &_SpeakersItem {
      width: 30%;
    }

    &_SpeakerImg {
      width: 2em;
      display: inline;
    }
    &_SpeakerName {
      display: inline;
    }
    &_SpeakerTitle {
    }
    &_SpeakerImg {
    }

    &_Anchor {
      @include button();
      margin: 0 0 0 0;
    }
  }
</style>
