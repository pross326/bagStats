<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 basil--text">
        {{player.name}}
      </h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
      icons-and-text
    >
      <v-tab
        v-for="tab in tabs"
        :key="tab"
      >
       <v-icon>{{tab.icon}} </v-icon> 
       {{ tab.title }} 
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="tab in tabs"
        :key="tab"
      >
        <v-card
          color="basil"
          flat
        >
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
export default {
  name: "myProfile",
  data: () => ({
    player: {
      name: "Paul Ross",
    },
    tabs: [
      { title: "My Bags", icon: 'mdi-square-rounded' },
      { title: "Reviews", icon: 'mdi-message-draw' },
      { title: "Transactions", icon: 'mdi-account-switch-outline' },
    ],
    tab: null,

  }),
  components: {},
};
</script>

<style>

</style>
