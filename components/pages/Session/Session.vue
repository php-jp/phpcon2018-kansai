<template>
  <div class="home-Session">
    <div class="st-Container">
      <h2 class="home-Session_title">SESSION</h2>
      <p class="home-Session_text">
        初心者から上級者まで楽しめるセッションが目白押し!
        これから始めようと思っていたフレームワークや、気になっていた技術についての情報が得られるかも!?
        あなたはどのセッションを見に行きますか？
      </p>
      <!--<div class="home-Session_overScroll">-->
        <!--<div class="home-Session_TimeSelect">-->
          <!--<div class="home-Session_Time" v-for="time in times" :key="time.time" >-->
            <!--<p class="home-Session_TimeStyle">{{time.time}}</p>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <div class="home-Session_Main">
        <h3 class="home-Session_RoomNumber">{{session.room}}</h3>
        <div class="home-Session_MainWrap">
          <!--<span class="home-Session_TimeSchedule">10:00 - 11:40</span>-->
          <h3 class="home-Session_MainTitle">{{session.title}}</h3>
          <h5 class="home-Session_MainSubTitle" v-if="session.subtitle">{{session.subtitle}}</h5>
          <div class="home-Session_MainText" v-html="session.description"></div>
          <div class="home-Session_Profile">
            <div class="home-Session_ProfileImgWrap">
              <div class="home-Session_ProfileImg" :style="sessionImg"></div>
            </div>
            <div class="home-Session_Personal">
              <div class="home-Session_ProfileName">{{session.name}}</div>
              <div class="home-Session_ProfileCompany" v-if="session.team">{{session.team}}</div>
              <p class="home-Session_ProfileText" v-html="session.profile"></p>
            </div>
            <div class="home-Session_Links">
              <a :href="link.link" target="_blank" class="home-Session_Link"
                 v-for="(link,key) in session.link" :key="key">
                  <i v-if="link.type=='twitter'" class="fa fa-twitter fa-2x" aria-hidden="true"/>
                  <i v-if="link.type=='facebook'" class="fa fa-facebook fa-2x" aria-hidden="true"/>
                  <i v-if="link.type!='twitter' && link.type!='facebook' " class="fa fa-link fa-2x" aria-hidden="true"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--<div class="home-Session_Other">-->
        <!--<h2>同時刻の他のセッション</h2>-->
        <!--<div class="home-Session_Lists">-->
          <!--<div class="home-Session_List" v-for="item in items" :key="item.item">-->
            <!--<h3 class="home-Session_OtherRoomNumber">{{item.room}}</h3>-->
            <!--<a href="" class="home-Session_Item">-->
              <!--<div class="home-Session_OtherDescription">-->
                <!--<div class="home-Session_OtherImg"></div>-->
                <!--<p class="home-Session_OtherText">{{item.msg}}</p>-->
                <!--<div class="home-Session_OtherIcon"><i class="fas fa-plus" aria-hidden="true"></i></div>-->
              <!--</div>-->
            <!--</a>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>

<script>
    export default {
      props:{
        session: {
          type: Object
        }
      },
      computed:{
        sessionImg(){
          return {"background-image":`url("/images/speakers/${this.session.image}")`}
        }
      },
        data () {
            return {
                clickNumber:0,
                isSelect:false,
                times:[
                    {time:'10:00'},
                    {time:'11:00'},
                    {time:'12:00'},
                    {time:'13:00'},
                    {time:'14:00'},
                ],
                items:[
                    {room:'Room C01+C02', msg:'25文字でできるPHPできるあんなことやこんなこと'},
                    {room:'Room C01+C02', msg:'25文字でできるPHPできるあんなことやこんなこと'}
                ]
            }
        }
    }



</script>

<style lang="scss" scoped>
  @import "~assets/scss/library/_variable.scss";
  @import "~assets/scss/library/_mixin.scss";
  .home-Session{
    padding:20px 0 70px 0;
    z-index: 1;
    &_text {
      margin-bottom: 50px;
    }
    &_overScroll {
      overflow-x: scroll;
      margin-bottom: 20px;
      .home-Session_TimeSelect {
        display: inline-block;
        white-space: nowrap;
        .home-Session_Time {
          display: inline-block;
          width: 70px;
          height: 50px;
          border-radius: 10px;
          background-color: #fff;
          color: #44648c;
          margin: 0 10px 0 0;
          &Style {
            margin-top: 13px;
          }
        }
      }
    }
    &_Main {

    }
    &_RoomNumber {
      background-color: transparent;
      width: 50%;
      text-align: center;
      border: 1px solid #fff;
      border-bottom: transparent;
      border-radius: 10px 10px 0 0;
      margin: 0;
      line-height: 3;
      @include desktop() {
        width: 25%;
      }
    }
    &_MainWrap {
      background-color: #fff;
      color: $clr_baseDark;
      padding: 30px 30px;
      text-align: left;
      @include desktop() {
        padding: 30px 50px;
      }
    }
    &_TimeSchedule {
      background-color: #ccc;
      padding: 5px;
      border-radius: 5px;
    }
    &_MainTitle {

    }
    &_MainSubTitle {

    }
    &_MainText {
      margin-bottom: 30px;
    }
    &_Profile {
      border-top: 1px solid $clr_baseDark;
      text-align: center;
    }
    &_ProfileImgWrap {
      @include desktop() {
        display: inline-block;
        width: 30%;
        text-align: left;
      }
    }
    &_ProfileImg {
      /*background-image: url('http://placehold.it/150x150');*/
      width: 150px;
      height: 150px;
      background-size: contain;
      border-radius: 50%;
      margin: 40px 10px 10px 10px;
      display: inline-block;
    }
    &_Personal {
      display: inline-block;
      width: 100%;
      margin-bottom: 20px;
      @include desktop() {
        text-align: left;
        margin: 0;
        width: 70%;
      }
    }
    &_ProfileName {
      font-weight: bold;
      font-size: 24px;
    }
    &_ProfileCompany {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 20px;
    }
    &_ProfileText {
      text-align: left;
    }
    &_Links {
      @include desktop() {
        text-align: left;
      }
    }
    &_Link {
      position: relative;
      top: 0;
      display: inline-block;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      background-color: #ccc;
      margin: 0 10px;
      @include desktop() {
        margin: 0 0 0 10px;
      }
      i {
        font-size: 1.5em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: $clr_baseDark;
      }
    }
    &_Lists {
      list-style: none;
      text-align: left;
      color: $clr_baseDark;
      padding: 0;
      @include desktop() {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
    &_List {
      margin-bottom: 20px;
      @include desktop() {
        width: 48%;
      }
    }
    &_OtherRoomNumber {
      background-color: $clr_accent;
      width: 50%;
      text-align: center;
      border-radius: 10px 10px 0 0;
      margin: 0;
      line-height: 3;
      @include desktop() {
        width: 40%;
      }
    }
    &_Item {
      display: inline-block;
      text-decoration: none;
      background-color: #fff;
      color: $clr_baseDark;
      width: 100%;
    }
    &_OtherDescription {
      position: relative;
    }
    &_OtherImg {
      background-image: url('http://placehold.it/100x100');
      width: 100px;
      height: 100px;
      background-size: contain;
      border-radius: 50%;
      margin: 10px;
      display: inline-block;
    }
    &_OtherText {
      display: inline-block;
      width: 50%;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      @include desktop() {
        width: 60%;
      }
    }
    &_OtherIcon {
      position: absolute;
      bottom: 0;
      right: 0;
      border: 25px solid transparent;
      border-right: 25px solid $clr_accent;
      border-bottom: 25px solid $clr_accent;
      i {
        position: absolute;
        top: 50%;
        transform: translateY(-25%);
        font-size: 25px;
        color: #fff;
      }
    }
  }

</style>
