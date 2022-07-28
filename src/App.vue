<template>
<v-app>
    <v-main>
    <siteHeader />
    <div>
      <router-view/>
    </div>
    </v-main>
  </v-app>
</template>

<script>
import siteHeader from './components/siteHeader.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { siteHeader }
};
</script>
