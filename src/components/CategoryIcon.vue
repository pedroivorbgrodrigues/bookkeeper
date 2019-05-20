<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on" class="icon-btn">
        <v-icon color="teal lighten-2">
          {{ icon }}
        </v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-tile
        v-for="(iconCode, type, index) in categoryIcons"
        :key="index"
        @click="$emit('changeIcon', type)"
      >
        <v-list-tile-title>
          <v-icon>{{ iconCode }}</v-icon>
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  name: "CategoryIcon",
  computed: {
    icon() {
      return this.categoryIcons[this.value];
    }
  },
  data() {
    return {
      categoryIcons: {
        fixedIncome: "fas fa-chart-line",
        stocks: "fas fa-file-invoice-dollar"
      }
    };
  },
  props: ["value"]
};
</script>
<style lang="scss">
.v-btn--icon:before {
  border-radius: 0;
}
</style>
