<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 basil--text">
        {{ player.name }}
      </h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
      icons-and-text
    >
      <v-tab v-for="tab in tabs" :key="tab" @click="selected = tab.tabName">
        <v-icon>{{ tab.icon }}</v-icon>
        {{ tab.title }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" >
      <v-tab-item v-for="tab in tabs" :key="tab">
        <v-divider></v-divider>
        <component :is="selected"></component>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import myBags from "../components/myBags.vue";
import myReviews from "../components/myReviews.vue";
import myTransactions from "../components/myTransactions.vue";


export default {
  name: "myProfile",
  data: () => ({
    player: {
      name: "Paul Ross",
    },
    tabs: [
      { title: "My Bags", icon: "mdi-square-rounded", tabName: 'myBags' },
      { title: "Reviews", icon: "mdi-message-draw", tabName: 'myReviews'},
      { title: "Transactions", icon: "mdi-account-switch-outline", tabName: 'myTransactions' },
    ],
    selected: 'myBags',
    tab: null,
  }),
  components: { myBags, myReviews, myTransactions },
};
</script>

<style>
.centered-images {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
