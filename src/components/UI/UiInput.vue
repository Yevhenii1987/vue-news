<template>
  <input class="input" :value="modelValue" @input="updateInput" type="text" placeholder=" ">
</template>
<script>
  export default {
    name: 'ui-input',
    props: {
      modelValue: [String, Number],
    },
    methods: {
      updateInput(event) {
        this.$emit('update:modelValue', event.target.value)
      }
    }
  }
</script>
<style scoped>
  .input {
    padding: 1.2rem 1.5rem;
    margin-bottom: 1.5rem;
    height: 5rem;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    border: 1px solid var(--color-border);
    border-radius: 0;
    background: var(--color-background-second);
  }
</style>