<template>
  <v-text-field
    label="Allocation"
    v-bind:value="value"
    suffix="%"
    type="number"
    min="1.00"
    max="100.00"
    v-on:keydown.tab.exact="$emit('tab', $event)"
    v-on:blur="keepInBoundary"
    v-on:input="$emit('input', $event)"
    ref="input"
  >
  </v-text-field>
</template>
<script>
export default {
  name: "AllocationInput",
  methods: {
    keepInBoundary() {
      this.$emit("blur", this.value);
      let parsed = parseFloat(this.value);
      let bound = parsed >= this.maxAllocation ? this.maxAllocation : parsed;
      this.$emit("input", bound.toFixed(2));
    }
  },
  data() {
    return {
      maxAllocation: 100,
      minAllocation: 1
    };
  },
  props: ["value"]
};
</script>
