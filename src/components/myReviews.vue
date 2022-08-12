<template>
  <v-container fluid py-10 style="width: 80vw">
    <v-row style="width: 80vw">
      <v-col v-for="review in reviews" :key="review" cols="3">
        <v-card rounded="xl" elevation="5" class="ma-auto">
          <v-card-title class="justify-center pb-0 flex-column">
            <h2 class="mt-2 mb-0">{{ review.bag }}</h2>
          </v-card-title>
          <v-row class="justify-center">
            <v-avatar
              size="60"
              color="secondary"
              class="justify-center mt-5 mb-2"
            >
              <span class="text-h5 font-weight-black">
                {{ review.rating }}</span
              >
            </v-avatar>
          </v-row>
          <v-row class="mt-3 justify-center">
            <v-rating
              :value="review.rating"
              color="accent"
              dense
              half-increments
              readonly
              size="25"
            ></v-rating>
          </v-row>

          <v-card-text>
            <div class="mt-4">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-btn @click="review.hidden = !review.hidden" color="accent" text>{{
                  review.hidden ? "Show Review" : "Hide Review"
                }}</v-btn>
                <v-spacer></v-spacer>
                <v-btn fab icon @click="review.hidden = !review.hidden">
                  <v-icon>{{
                    review.hidden ? "mdi-chevron-down" : "mdi-chevron-up"
                  }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="!review.hidden">
                  <v-divider></v-divider>
                  <v-card-text>
                    <h3 class="mt-2 mb-0">Subject: {{ review.subject }}</h3>
                    <h5 class="body-1 mt-2">{{ review.text }}</h5>
                    <h4 class="mt-3">By: {{ review.reviewer }}</h4>
                  </v-card-text>
                </div>
              </v-expand-transition>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "myReviews",
  data: () => ({
    reviews: [
      {
        bag: "BG Vikings",
        rating: 4.6,
        subject: "Great Bag",
        text: "Really love these bags. They are awesome but kick if they arent thrown straight",
        reviewer: "Paul Ross",
        hidden: true,
      },
      {
        bag: "BG Assassins",
        rating: 4.9,
        subject: "My Favorite",
        text: "Best bags I've ever thrown!",
        reviewer: "Paul Ross",
        hidden: true,
      },
      {
        bag: "Game Changers",
        rating: 3.8,
        subject: "Too Fast",
        text: "Slide right off the board",
        reviewer: "Paul Ross",
        hidden: true,
      },
      {
        bag: "Blacksheep Costellos",
        rating: 3.2,
        subject: "Very Fast",
        text: "Either in the hole or off the board",
        reviewer: "Paul Ross",
        hidden: true,
      },
      {
        bag: "Viper-C's",
        rating: 4.4,
        subject: "My Favorite",
        text: "Really solid bag",
        reviewer: "Paul Ross",
        hidden: true,
      },
    ],
  }),
  computed: {
    // isShowing() {
    //   let isShowing = false
    //   if (show) {
    //     isShowing = false
    //   }
    //   return isShowing
    // }
  },
};
</script>

<style></style>
