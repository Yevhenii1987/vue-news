<template>
  <div class="post">
    <div>
      {{ post.id }}
      <p><strong>Title: </strong>{{ post.title }}</p>
      <p><strong>Description: </strong>{{ post.body }}</p>
    </div>
    <div class="post-btns">
      <ui-button @click="$router.push(`/posts/${post.id}`)"
        >View more</ui-button
      >
      <ui-button @click="$emit('remove', post)">Delete</ui-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
  .post {
    /* margin-bottom: 1.5rem; */
    padding: 1.5rem 2rem;
    display: grid;
    grid-template-columns: 1fr auto;
    column-gap: 3rem;
    font-size: 2rem;
    border: 1px solid var(--color-border);
    background: var(--color-background-second);
  }

  .post-btns {
    display: flex;
    flex-direction: column;
  }

  .btn {
    margin-bottom: 1rem;
  }

  .btn:last-child {
    margin-bottom: 0;
  }
</style>
