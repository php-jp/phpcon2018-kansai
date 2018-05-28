<template>
    <div class="ttrow">
      <div class="ttrow--cdefaults">
        <div class="ttrow--cdefault">
          <div class="ttrow--time">
            11:00
          </div>
          <div class="ttrow--session__a">
            <time-table-session class="type-a"></time-table-session>
          </div>
          <div class="ttrow--session__b">
            <time-table-session class="type-b"></time-table-session>
          </div>
        </div>
        <div class="ttrow--crestrow" v-if="long">
          <div class="ttrow--time">
            11:00
          </div>
          <div class="ttrow--timerest">20分休憩</div>
        </div>
        <div class="ttrow--cdefault" v-if="long">
          <div class="ttrow--time">
            11:00
          </div>
          <div class="ttrow--session__a">
            <time-table-session class="type-a"></time-table-session>
          </div>
          <div class="ttrow--session__b">
            <time-table-session class="type-b"></time-table-session>
          </div>
        </div>
      </div>
      <div class="ttrow--clong" v-if="!long">
        <div class="ttrow--session__c">
          <time-table-session class="type-c"></time-table-session>
        </div>
      </div>
      <div class="ttrow--clong" v-else>
        <div class="ttrow--session__c is-long">
          <time-table-session class="type-c"></time-table-session>
        </div>
      </div>
    </div>
</template>

<script>
  import TimeTableSession from "./time_table_session"
    export default {
      props:{
        long:{}
      },
        data() {
            return {

            }
        },
      components:{
        TimeTableSession
      }
    }

</script>

<style lang="scss" scoped>
    @import "~assets/scss/library/_variable.scss";
    @import "~assets/scss/library/_mixin.scss";

    $baseWidth: 30%; // それぞれのトラックの幅
    $baseHeight: 220px; // それぞれのトラックの高さ
    $restHeight: 30px; // それぞれのトラックの高さ
    $ttrow-gutter: 10px; // 時間ごとの盾のガッター

    $longHeight: $baseHeight * 2 + $ttrow-gutter * 2 + $restHeight;


.ttrow{
  color: $clr_baseDark;
  display: flex;
  margin: $ttrow-gutter 0;

  &--cdefaults{
    width: 100 - $baseWidth;
  }
  &--cdefault{
    display: flex;
  }
  &--crestrow{
    display: flex;
    margin: $ttrow-gutter 0;
    height: $restHeight;
    .ttrow--time{
      writing-mode: horizontal-tb;
      overflow: visible;
    }
  }
  &--session__a,
  &--session__b,
  &--session__c{
    height: $baseHeight;

  }
  &--session__a,
  &--session__b{
    width: $baseWidth * 10 /7;
  }
  &--session__c{
    width: 100%; // abc で幅を考えない
  }
  &--session__c.is-long{
    width: 100%; // abc で幅を考えない
    height: $longHeight;
  }
  &--time{
    width: 100-($baseWidth * 10 /7)*2;
    writing-mode: vertical-rl;
    background: $clr-gray;
    text-align: left;
  }
  &--timerest{
    background: $clr-gray;
    width: 100%;
  }
  &--clong{
    width: $baseWidth;
  }
}

</style>
