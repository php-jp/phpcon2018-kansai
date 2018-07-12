<template>
  <div class="home-Staff">
    <div class="home-Staff_Wave"></div>
    <div class="st-Container">
      <h2 class="home-Staff_Title">Staff</h2>
      <div class="home-Staff_List">
        <div class="home-Staff_Information" v-for="(staff, index) in staffs" :key="index">
          <a class="home-Staff_Link" :href="staff.link" target="_blank">
            <img class="home-Staff_Img" :src="staff.img" alt="">
            <span class="home-Staff_Name">{{staff.name}}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed:{
      staffs(){
        return this.$store.state.staffs
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~assets/scss/library/_variable.scss";
  @import "~assets/scss/library/_mixin.scss";

  .home-Staff {
    @include secPaddiong;
    width: auto;
    background: $clr_baseWhite;
    color: $clr_base;
    position: relative;

    &_Wave {
      width: 100%;
      height: 20px;
      background-image: url("~/assets/images/wavyLine-white.png");
      background-repeat: repeat-x;
      background-size: contain;
      position: absolute;
      bottom:100%
    }

    &_Title {
      @include secTitle($clr_base);
    }

    &_List {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    &_Information {
      width: 120px;
    }

    &_Link {
      text-decoration: none;
    }

    &_Img {
      width: 100%;
      border-radius: 50%;
    }

    &_Name {
      color: $clr_base;
    }
  }
</style>