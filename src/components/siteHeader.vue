<template>
<div>
  <v-app-bar
      app
      color="primary white--text"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-10"
          color="secondary"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          link
          class="mx-2"
        >
          <router-link :to="link.link">{{ link.text }}</router-link>
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
            color="white"
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'siteHeader',
     data: () => ({
        links: [
            { text: "Home", link: "/home" },
            { text: "Profile", link: "/Profile" },
        ],
})}
</script>

<style>


</style>