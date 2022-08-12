<template>
  <v-container fluid py-10 style="width: 80vw">
  <addBags />
          <v-row style="width: 80vw">
            <v-col v-for="bag in bags" :key="bag" cols="3">
              <v-card rounded="xl" elevation="5" class="ma-auto">
                <v-card-title class="justify-center pb-0">
                  <h2 class="mt-2 mb-0">{{ bag.name }}</h2>
                </v-card-title>
                <v-container class="centered-images">
                  <v-avatar tile size="200">
                    <img :src="bag.imageSrc" contain aspect-ratio="1" />
                  </v-avatar>
                </v-container>
                <v-card-text>
                  <v-row class="justify-center">
                    <v-rating
                      :value="bag.rating"
                      color="accent"
                      dense
                      half-increments
                      readonly
                      size="30"
                    ></v-rating>
                  </v-row>
                  <div class="text-center mt-4">
                    <span class="text-h5">{{ bag.rating }}</span>
                  </div>
                  <v-chip class="mt-1">{{ bag.type }}</v-chip>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
</template>

<script>

import addBags from '../components/addBags.vue'

export default {
    name: 'myBags',
    data: () => ({
    bags: [
      {
        name: "BG Assassins",
        type: "BG",
        imageSrc:
          "https://cdn.shopify.com/s/files/1/0278/4539/4568/files/BG_Round_logo_360x.jpg?v=1630621484",
        rating: 4.5,
      },
      {
        name: "Game Changers",
        type: "Game Changers",
        imageSrc:
          "https://cdn11.bigcommerce.com/s-wv9fdy48il/images/stencil/1280x1280/products/172/2768/black_1__03723.1637791931.png?c=2",
        rating: 3.7,
      },
      {
        name: "Black Sheep Costellos",
        type: "Black Sheep Baggers",
        imageSrc:
          "data:image/png;base64,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",
        rating: 3.5,
      },
      {
        name: "Reynolds Pro Excel",
        type: "Reynolds",
        imageSrc:
          "https://cdn.shopify.com/s/files/1/0767/1647/products/ProExcel_BlueMain_540x540.jpg?v=1634827361",
        rating: 3.7,
      },
      {
        name: "Viper-C",
        type: "Ultra Bags",
        imageSrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBtSuuz5d59iFgPRsG_fILsbaoYRp7CAlrD95FbA5oVVc9UhlWrPhnuxOUXsfQicJ4HI&usqp=CAU",
        rating: 4.7,
      }
      ],
      
}),

  components: { addBags,},
};
</script>

<style>

</style>