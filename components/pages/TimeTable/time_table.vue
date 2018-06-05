<template>
  <div class="home-Time">
    <div class="st-Container">
      <h2 class="home-Time_title">TIME TABLE</h2>
      <p class="home-Time_description">初心者から上級者までが楽しめるセッションが目白押し!これから始めようと思っていたフレームワークや（仮）クリックするとセッションの詳細が確認できます。</p>
      <div class="home-Time_session">
        <div class="home-Time_sessionTitle">
          <div class="home-Time_sessionHidden"></div>
          <div class="home-Time_sessionA">C01+C02</div>
          <div class="home-Time_sessionB">C05</div>
          <div class="home-Time_sessionC">C07</div>
        </div>
        <time-table-row v-for="(_sessions,index) in sessions" :key="index" v-bind="_sessions"/>
      </div>
      <div class="home-Time_Link">
        <a href="/"><i class="fas fa-home" aria-hidden="true"></i>TOPへ戻る</a>
      </div>
    </div>
  </div>
</template>

<script>
import TimeTableRow from "./time_table_row"
export default {
  data() {
    return {
      sessions: [
          {}
          ,
          {
              tracka: {
                  title:"開会挨拶",
                  name:"太郎"
              },
              trackb: {
                  title:"",
                  name:""
              },
              trackc: {
                  title:"",
                  name:""
              },
          },
        {
          tracka: [
            this.$store.state.speakers.matuhuzi_hideharu,
            this.$store.state.speakers.sugita_sota,

          ],
          trackb: [
            this.$store.state.speakers.nakasima_rin,
            this.$store.state.speakers.hishida_hiromi,
          ],
          trackc: this.$store.state.speakers.sakakibara_masahiko,
        },
        {
          tracka: [
            this.$store.state.speakers.takahasi_yugo,
            this.$store.state.speakers.tba,

          ],
          trackb: [
            this.$store.state.speakers.tba,
            this.$store.state.speakers.wakaba_akira,
          ],
          trackc: this.$store.state.speakers.goto_hidenori,
        },
        {
          tracka: this.$store.state.speakers.tba,
          trackb: this.$store.state.speakers.saita_sinya,
          trackc: this.$store.state.speakers.tba,
        },
        {
          tracka: [
            this.$store.state.speakers.tba,
            this.$store.state.speakers.kisida_kenitiro,

          ],
          trackb: [
            this.$store.state.speakers.suzuki_siniti,
            this.$store.state.speakers.usami_kenta,
          ],
          trackc: this.$store.state.speakers.takahasi_kunihiko,
        }
      ]
    }
  },
  components: {
    TimeTableRow
  }
}

</script>

<style lang="scss" scoped>
@import "~assets/scss/library/_variable.scss";
@import "~assets/scss/library/_mixin.scss";

.home-Time {
  padding: 70px 0;
  background-color: #fff;
  &_title {
    color:#044ca4
  }
  &_description {
    color: #044ca4;
    margin-bottom: 30px;
  }

  &_session {
    margin-bottom: 3em;
    &Title {
      display: none;
      @include desktop() {
        display: flex;
      }
    }
    &Hidden {
      display: none;
      @include desktop() {
        display: block;
        visibility: hidden;
        width: 100-(30% * 10 /7)*2;
        margin: 0 2px;
      }
    }
    &A, &B, &C {
      display: none;
      @include desktop() {
        display: block;
        width: 30% * 10 /7;
        margin: 0 2px;
        background-color: $clr_main;
        line-height: 4em;
        border-radius: 10px 10px 0 0;
      }
    }
    &B {
      @include desktop() {
        background-color: $clr_accent;
      }
    }
    &C {
      @include desktop() {
        width: 43.6%;
        background-color: $clr_base;
      }
    }
  }
  &_Link {
    @include button();
    margin-bottom: 3em;
    a {
      color: $clr_baseDark;
      text-decoration: none;
      padding: 15px 45px;
    }
    i {
      padding-right: 1em;
    }
  }
}

</style>
