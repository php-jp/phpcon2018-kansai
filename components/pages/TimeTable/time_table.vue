<template>
    <div class="home-Time">
        <div class="st-Container">
            <h2 class="home-Time_title">TIME TABLE</h2>
            <p class="home-Time_description">今年のPHP カンファレンス関西は、公募申込数が過去最大！珠玉のセッションを取り揃えたPHP カンファレンス関西 2018
                あなたはどのセッションを見に行きますか？</p>
            <div class="home-Time_session">
                <div class="home-Time_sessionTitle">
                    <div class="home-Time_sessionHidden"></div>
                    <div class="home-Time_sessionA">C01+C02</div>
                    <div class="home-Time_sessionB">C05</div>
                    <div class="home-Time_sessionC">C07</div>
                </div>
                <time-table-row v-for="(_sessions,index) in sessions" :key="index" v-bind="_sessions"/>
            </div>
            <router-link
                    to="/"
                    class="home-Time_Link">
                <i class="fa fa-home" aria-hidden="true"></i>
                <span>TOPへ戻る</span>
            </router-link>
        </div>
    </div>
</template>

<script>
  import TimeTableRow from "./time_table_row"

  export default {
    data() {
      return {
        sessions: [
          {
            times:[
              "10:00",
            ],
            tracka: {
              title: "開場・受付",
            },
          },
          {
            times:[
              "10:30",
            ],
            tracka: {
              title: "開会挨拶",
              name: "ショウノシオリ",
              image: "shono_shiori.jpg"
            },
            trackb: {
              title: "",
              name: ""
            },
            trackc: {
              title: "",
              name: ""
            },
          },
          {
            times:[
              "10:50",
              "11:20",
              "11:35",
            ],
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
            times:[
              "12:05",
            ],
            tracka: {
              title: "昼休み",
            },
            trackb: {
              title: "昼休み",
            },
            trackc: {
              title: "昼休み",
            },
          },
          {
            times:[
              "13:10",
              "13:40",
              "13:55",
            ],
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
            times:[
              "14:25",
            ],
            tracka: {
              title: "20分休憩",
            },
            trackb: {
              title: "20分休憩",
            },
            trackc: {
              title: "20分休憩",
            },
          },
          {
            times:[
              "14:45",
            ],
            tracka: this.$store.state.speakers.tba,
            trackb: this.$store.state.speakers.saita_sinya,
            trackc: this.$store.state.speakers.tba,
          },
          {
            times:[
              "15:15",
            ],
            tracka: {
              title: "20分休憩",
            },
            trackb: {
              title: "20分休憩",
            },
            trackc: {
              title: "20分休憩",
            },
          },
          {
            times:[
              "15:35",
              "16:05",
              "16:20",
            ],
            tracka: [
              this.$store.state.speakers.tba,
              this.$store.state.speakers.kisida_kenitiro,

            ],
            trackb: [
              this.$store.state.speakers.suzuki_siniti,
              this.$store.state.speakers.usami_kenta,
            ],
            trackc: this.$store.state.speakers.takahasi_kunihiko,
          },
          {
            times: [
              "16:50"
            ],
            tracka: {
              title: "10分休憩",
            },
            trackb: {
              title: "10分休憩",
            },
            trackc: {
              title: "10分休憩",
            },
          },
          {
            times:[
              "17:00",
            ],
            tracka: {
              title: "LT大会",
              image: "shono_shiori.jpg"
            },
          },
          {
            times:[
              "17:50",
            ],
            tracka: {
              title: "閉会挨拶",
              image: "shono_shiori.jpg"
            },
          },
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

    .st-Container {
        padding: 0 10px;
    }

    .home-Time {
        padding: 40px 0;
        background-color: #fff;
        color: $clr_baseDark;

        @include desktop {
            padding: 60px 0;
        }

        &_title {
            @include secTitle($clr_baseDark);
        }
        &_description {
            color: $clr_baseDark;
            margin-bottom: 30px;
            @include desktop {
                margin-bottom: 50px;
            }
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
                color: white;
                display: none;
                @include desktop() {
                    display: block;
                    width: 30% * 10 /7;
                    margin: 0 2px;
                    padding: 18px 0;
                    font-size: 1.7rem;
                    font-weight: bold;
                    background-color: $clr_main;
                    border-radius: 10px 10px 0 0;
                }
            }
            &B {
                @include desktop() {
                    background-color: $clr_accent;
                    color: $clr_baseDark;
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
