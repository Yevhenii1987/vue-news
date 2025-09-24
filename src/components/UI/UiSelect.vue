<template>
  <select class="select" :value="modelValue" @change="selectSort">
    <option disabled value="">Choose sort type</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>
<script>
export default {
  name: "ui-select",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    selectSort(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<style scoped>
.select {
  align-self: flex-end;
  padding: 1.2rem 1.5rem;
  font-size: 2rem;
  height: 5rem;
  min-width: 20rem;
  border: 1px solid var(--color-background-forth);
  background: var(--color-background-forth);
  cursor: pointer;
  transition: all 0.2s;
}
.select option {
  font-size: 1.6rem;
}

.btn:hover {
  background: var(--color-background-forth);
  border: 1px solid var(--color-background-forth);
}
</style>
