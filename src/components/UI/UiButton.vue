<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>
<script>
  export default {
    name: 'ui-button'
  }
</script>
<style scoped>
  .btn {
    align-self: flex-end;
    padding: 1.2rem 1.5rem;
    height: 5rem;
    min-width: 20rem;
    border: 1px solid var(--color-background-forth);
    cursor: pointer;
    background: transparent;
    transition: all .2s;
  }

  .btn:hover {
    background: var(--color-background-forth);
    border: 1px solid var(--color-background-forth);
  }
</style>