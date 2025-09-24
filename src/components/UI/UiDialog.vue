<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div class="dialog__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "ui-dialog",
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
};
</script>
<style scoped>
.dialog {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.65);
}

.dialog__content {
  display: flex;
  flex-direction: column;
  width: 50rem;
  max-width: 100%;
  background: var(--color-background);
}
</style>
