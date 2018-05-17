<template>
  <div class="home-Session">
    <div class="st-Container">
        <h2 class="home-Session_title">SESSION</h2>
        <p class="home-Session_text">初心者から上級者まで楽しめるセッションが目白押し!これから始めようと思っていたフレームワークや、気になっていた技術についての情報が得られるかも!?（仮）クリックするとセッション詳細が確認できます</p>
        <div class="home-Session_overScroll">
          <div class="home-Session_TimeSelect">
            <div class="home-Session_Time" v-for="time in times" :key="time.time" >
              {{time.time}}
            </div>
          </div>
        </div>
        <div class="home-Session_Description"></div>
        <div class="home-Session_Other">
          <h2>同時刻の他のセッション</h2>
        </div>
        <div class="home-Session_Wave"></div>
    </div>
  </div>

</template>

<script>
    export default {
        data () {
            return {
                clickNumber:0,
                isSelect:false,
                times:[
                    {time:'10:00'},
                    {time:'10:00'},
                    {time:'10:00'},
                    {time:'10:00'},
                    {time:'10:00'},
                ]
                }

            }}



</script>

<style lang="scss" scoped>
  @import "~assets/scss/library/_variable.scss";
  @import "~assets/scss/library/_mixin.scss";
  .home-Session{
    padding:20px 0 70px 0;
    &_text {
      margin-bottom: 50px;
    }
    &_overScroll {
      overflow-x: scroll;
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
        }
      }
    }
  }

</style>
