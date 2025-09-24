<template>
  <form class="form" @submit.prevent>
    <h4>Create Post</h4>
    <ui-input type="text" v-model="post.title" placeholder="Title" />
    <ui-input type="text" v-model="post.body" placeholder="Message" />
    <ui-button @click="createPost">Add</ui-button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      if (this.post.title) {
        this.post.id = Date.now();
        this.$emit("create", this.post);
      }
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>
<style scoped>
.form {
  padding: 1.5rem 2rem;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-border);
}

.form h4 {
  font-size: 2.4rem;
  font-weight: 700;
}

.form button {
  align-self: flex-end;
  border: 1px solid var(--color-background-forth);
  background: var(--color-background-forth);
}

.form button:hover {
  background: var(--color-background-third);
  border: 1px solid var(--color-background-third);
}
</style>
