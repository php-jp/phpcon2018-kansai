<template>
    <div class="home-Time">
        <div class="st-Container">
            <h2 class="home-Time_title">TIME TABLE</h2>
            <p class="home-Time_description">初心者から上級者までが楽しめるセッションが目白押し!これから始めようと思っていたフレームワークや（仮）クリックするとセッションの詳細が確認できます。</p>
            <div class="home-Time_session">
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
      components:{
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
    }
    &_table {
        margin-top: 30px;
        display: grid;
        grid-template-rows: 20px 30px;
        grid-template-columns: 25px 100px 100px 100px;
        .home-Time_item1 {
            grid-row: 1 / 3;
            grid-column: 1 / 2;
            background-color: #f4f4f4;
        }
        .home-Time_item2 {
            grid-row: 1/2;
            grid-column: 2/3;
            background-color: #04c4ac;

        }
        .home-Time_item3 {
            grid-row:2/3;
            grid-column: 2/3;
            background-color: #ccf4ec;
        }
        .home-Time_item4 {
            grid-row:1/2;
            grid-column: 3/4;
            background-color: #fce41c;
        }
        .home-Time_item5 {
            grid-row:2/3;
            grid-column: 3/4;
            background-color: #fcfcf4;
        }
        .home-Time_item6 {
            grid-row:1/2;
            grid-column: 4/5;
            background-color: #084ca4;
        }
        .home-Time_item7 {
            grid-row:2/3;
            grid-column: 4/5;
            background-color:#f8f4fc;
        }
    }
    &_session {
        margin-bottom: 3em;
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
