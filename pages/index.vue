<template>
  <section>
    <sec-hero></sec-hero>
    <sec-about></sec-about>
    <sec-time-table></sec-time-table>
    <sec-access></sec-access>
    <sec-sponsor></sec-sponsor>
    <sec-share></sec-share>
    <sec-follow></sec-follow>
    <p-footer></p-footer>
  </section>
</template>

<script>
  import secHero from '~/components/pages/Top/Hero.vue'
  import secAbout from '~/components/pages/Top/About.vue'
  import secTimeTable from '~/components/pages/Top/TimeTable.vue'
  import secAccess from '~/components/pages/Top/Access.vue'
  import secSponsor from '~/components/pages/Top/Sponsor.vue'
  import secShare from '~/components/pages/Top/Share.vue'
  import secFollow from '~/components/pages/Top/Follow.vue'
  import pFooter from '~/components/Footer.vue'

  export default{
      components:{
          secHero,
          secAbout,
          secTimeTable,
          secAccess,
          secSponsor,
          secShare,
          secFollow,
          pFooter
      }
  }

</script>

<style lang="scss">
  html {
    background-color: #004DA4;
  }

  body {
    font-family: "Yu Gothic", "游ゴシック", YuGothic, "游ゴシック体", sans-serif;
    color: #fff;
    text-align: center;
    margin: auto;
    font-size: 17px;
    line-height: 1.8;
  }

  p {
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
  }

  .st-Container {
    margin-right: auto;
    margin-left: auto;
    max-width: 100%;
    width: 980px;
    padding: 0 20px;
    box-sizing: border-box;
  }
</style>
