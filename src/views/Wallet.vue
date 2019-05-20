<template>
  <v-container>
    <v-layout row justify-center>
      <v-flex xs12 md6>
        <v-form @submit.prevent="addCategory">
          <v-text-field
            solo
            label="Add new category"
            v-model="nameInput"
            append-icon="add"
          ></v-text-field>
        </v-form>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex
        xs12
        md6
        lg4
        v-for="category in categories"
        :key="category.name"
        px-1
      >
        <category-card v-bind:categoryId="category.id" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CategoryCard from "../components/CategoryCard.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["categories"])
  },
  methods: {
    addCategory() {
      if (this.nameInput.length == 0) {
        return;
      }
      this.$store.dispatch("addCategory", this.nameInput);
      this.nameInput = "";
    }
  },
  data() {
    return {
      nameInput: ""
    };
  },
  components: { CategoryCard }
};
</script>

<style></style>
