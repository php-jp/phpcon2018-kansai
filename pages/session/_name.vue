<template>
  <section>
    <div v-if="session">
      <sec-section :session="session"></sec-section>
      <sec-other-section :target="name"></sec-other-section>
      <sec-share></sec-share>
      <sec-follow></sec-follow>
      <p-footer></p-footer>
    </div>
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
    computed:{
      name(){
        return this.$route.params.name
      }
    },
    data() {
      return {
        session: {},
      }
    },
    created () {
      const {speakers} = require("json-loader!yaml-loader!~/contents/speakers.yml");
      this.session = speakers[this.name]
    },
    head () {
      return {
        title: `${this.session.title } | ${this.session.name } | PHP カンファレンス関西 2018`,
        meta: [
          { property: 'og:title', content: `${this.session.title } | ${this.session.name } | PHP カンファレンス関西 2018` },
          { property: 'og:image', content: 'https://2018.kphpug.jp/images/ogp.jpg' },
          { property: 'og:url', content: 'https://2018.kphpug.jp/time_table' },
          { property: 'og:description', content: this.session.description },
          { name: 'description', content: this.session.description }
        ]
      }
    },
  }

</script>


<style lang="scss">
  @import "~assets/scss/foundation/_base.scss";
  @import "~assets/scss/object/_common.scss";
</style>
