<template>
<div>
  <v-app id="inspire">
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="n in leftNav"
                  :key="n"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ n }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              color="secondary"
            >
          
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
  </div>
</template>

<script>



  export default {
    name: "homePage",
    data: () => ({
        leftNav: [
            "New Release",
            "Top Rated",
            "My Bags",
            
        ]
    }),
    components: { }
}
</script>