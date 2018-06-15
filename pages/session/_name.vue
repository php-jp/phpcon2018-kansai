<template>
  <section>
    <sec-section></sec-section>
    <sec-other-section></sec-other-section>
    <sec-share></sec-share>
    <sec-follow></sec-follow>
    <p-footer></p-footer>
  </section>
</template>

<script>

  import secSection from '~/components/pages/Session/Session.vue'
  import secOtherSection from '~/components/pages/Session/OtherSession.vue'
  import secShare from '~/components/pages/Top/Share.vue'
  import secFollow from '~/components/pages/Top/Follow.vue'
  import pFooter from '~/components/Footer.vue'
  import { speaker } from '~/store';

  export default{
    components:{
      secSection,
      secOtherSection,
      secShare,
      secFollow,
      pFooter

    },
    data () {
      return {
        title: ''
      }
    },
    created () {
      const title = require("json-loader!yaml-loader!~/contents/speakers.yml");
      this.title = title.speakers.hishida_hiromi.title
    },
    head () {
      return {
        title: this.title
      }
    },
  }

</script>


<style lang="scss">
  @import "~assets/scss/foundation/_base.scss";
  @import "~assets/scss/object/_common.scss";
</style>
