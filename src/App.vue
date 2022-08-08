<template>
<v-app>
    <v-main>
    <siteHeader />
    <div>
      <router-view/>
    </div>
    <SiteFooter />
    </v-main>
  </v-app>
</template>

<script>
import siteHeader from './components/siteHeader.vue';
import siteFooter from './components/siteFooter.vue'
import SiteFooter from './components/siteFooter.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: {
    siteHeader,
    siteFooter,
    SiteFooter
}
};
</script>
