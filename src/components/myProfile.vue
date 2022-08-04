<template>
  <div>
    <v-app id="inspire">
      <v-main class="grey lighten-3">
        <v-container>
          <v-row>
            <v-col cols="2" dense>
              <v-sheet rounded="lg">
                <v-list color="transparent">
                  <v-list-item v-for="k in leftNav" :key="k" link>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ k }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider class="my-2"></v-divider>

                  <v-list-item link color="grey lighten-4">
                    <v-list-item-content>
                      <v-list-item-title> Refresh </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-sheet>
            </v-col>
            <v-col>
            
                <v-card
                  class="mx-auto py-5 pt-12 px-5 text-center"
                  height="80vh"
                  elevation="10"
                  width="75vw"
                  rounded="xl"
                >
                  <v-avatar color="primary" size="200"></v-avatar>
                  <v-card-title class="text-h2 mb-5 mt-5 justify-center" >
                    {{ this.player.name }}
                  </v-card-title>
                  <v-container fluid>
                    <v-row dense class="justify-space-around">
                      <v-col v-for="card in cards" :key="card.title" :cols="3">
                        <v-card elevation="7" rounded="xl">
                          <!-- <v-card-title
                            class="text-h3 justify-center"
                            v-text="card.amount"
                          ></v-card-title> -->
                          <v-avatar
                          :color='card.color'
                          size="120"
                          class="my-5">
                          <v-text class="text-h3">{{card.amount}}</v-text>
                          </v-avatar>
                          <v-card-title
                            class="text-h4 justify-center"
                            v-text="card.title"
                          ></v-card-title>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>

            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "myProfile",
  data: () => ({
    leftNav: ["My Bags", "My Reviews"],
    player: {
      name: "Paul Ross",
    },
    cards: [
      { title: "Sets of Bags", amount: 4, color: '#82a5e540' },
      { title: "Reviews", amount: 3, color: 'purple' },
      { title: "Transactions", amount: 2, color: 'red' },
    ],
  }),
  components: {},
};
</script>

<style></style>
