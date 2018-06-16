<template>
  <div class="home-Other">
    <div class="home-Other_Wave"></div>
    <div class="home-Other_Elephant"></div>
    <div class="st-Container">
      <h2 class="home-Other-title">OTHER SESSION</h2>
      <div class="home-Other-list">
        <div class="home-Other_session" v-if="key !== target && key !== 'tba'" v-for="(session,key) in sessions" :key="session.title" >
          <!--<img src="" alt="dummy" class="home-Session_Img" >-->
          <div class="home-Other_Img" :style="sessionImage(session)"></div>
          <p class="home-Other_description">{{session.title}}</p>
          <router-link class="home-Other_triangle" :to="`/session/${key}`">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </router-link>
        </div>
      </div>
      <div class="home-Other_link">
        <router-link to="/timeTable" class="home-Other_Btn">
          <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
          <span>タイムテーブルへ</span>
        </router-link>
        <router-link to="/" class="home-Other_Btn">
          <i class="fa fa-home" aria-hidden="true"></i>
          <span>TOPへ戻る</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props:{
        target:{}
      },
        data() {
            return {
                sessions: []
            }
        },
      methods:{
          sessionImage(session){
            return {
              "background-image": `url('/images/speakers/${session.image}')`
            }
          }
      },
      mounted(){
        const {speakers} = require("json-loader!yaml-loader!~/contents/speakers.yml");
        this.sessions = speakers
      }
    }

</script>

<style lang="scss" scoped>
  @import "~assets/scss/library/_variable.scss";
  @import "~assets/scss/library/_mixin.scss";

  .home-Other {
    width: auto;
    background-color: #004DA4;
    padding: 0 0 70px 0;
    &-title {
      margin-bottom: 60px;
    }
    &-list {
      display: flex;
      list-style: none;
      padding: 0;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-bottom: 10px;
      @include desktop() {
        padding: 0 80px;
      }

    }
    &_session {
      background-color: #5c84b4;
      position: relative;
      width: 45%;
      height: 140px;
      margin: 0 20px 50px 20px;
      max-width: 185px;
      @include desktop (){
        padding: 0 10px;
        width: 185px;

      }
      .home-Other_Img {
        top: -25px;
        position: absolute;
        left: 50%;
        background-color: #ffffff;
        border-radius: 50%;
        height: 60px;
        width: 60px;
        transform: translateX(-50%);
        background-size: cover;
      }
      .home-Other_description {
        position: relative;
        top:40px

      }
      .home-Other_triangle {
        position: absolute;
        top: 88px;
        right:1%;
        width: 0;
        height: 0;
        border-top: 25px solid transparent;
        border-right: 25px solid #fff;
        border-bottom: 25px solid #fff;
        border-left: 25px solid transparent;
        color: #144c9c;
        font-size: 18px;
        @include desktop(){
          left: 154px
        }
      }

    }
    &_link {
      .home-Other_Btn {
        @include button();
        min-width: 13em;
        font-size: 16px;
        font-weight: 600;
        padding: 15px 2em;
        margin: 1em;
        @include desktop() {
          font-size: 17px;
          padding: 15px 30px;
        }
      }

    }
    &_Wave {
      z-index: 10;
      background-image: url("/images/ocean.png");
      width: 100%;
      height: 90px;
      background-repeat: repeat-x;
      background-size: contain;
      position: relative;
      top: -30px;
    }
    &_Elephant {
      width: 60px;
      height: 60px;
      z-index: 100;
      background-image: url("/images/elephant.png");
      background-repeat: no-repeat;
      background-size: contain;
      position: relative;
      top: -130px;
      left: 70%;
    }
  }
</style>
