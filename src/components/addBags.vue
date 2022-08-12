<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          justify="center"
          color="success"
          v-bind="attrs"
          v-on="on"
          x-large
          fab
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Add Your Bags!</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6" sm="6">
                <v-autocomplete
                  v-model="bagSelection"
                  :items="items"
                  label="Bag Type"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Name of Bag*"
                  v-model="bagName"
                  hint="Example: Costellos, Vikings, etc."
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="d-flex justify-center">
                <v-col cols="6">
                  <v-file-input
                    v-model="bagImage"
                    accept="image/*"
                    label="File input"
                    dense
                    chips
                  ></v-file-input>
                </v-col>
              </v-col>
            </v-row>
          </v-container>
          <small class="d-flex justify-end">*All fields are required</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="addBag()"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<!--bagSelection, bagName, bagImage  -->

<script>
export default {
  name: "addBags",
  data: () => {
    return {
      rating: null,
      dialog: false,
      items: ["BG", "Lucky Bags", "Black Sheep Baggers", "Sure Fires", "Other"],
    };
  },
  methods: {
    addBag() {
      const newBag = {
        name: this.bagSelection,
        type: this.bagName,
        imageSrc: this.bagImage,
      };
      console.log(newBag);
      this.dialog = false;
    },
  },
};
</script>

<style></style>
