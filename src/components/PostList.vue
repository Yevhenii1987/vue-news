<template>
  <div v-if="posts.length > 0">
    <h3>Posts list:</h3>
    <TransitionGroup name="list" tag="div">
      <post-item
        @remove="$emit('remove', post)"
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </TransitionGroup>
  </div>
  <h3 v-else>There is no posts</h3>
</template>
<script>
import PostItem from "@/components/PostItem.vue";
import { Transition } from "vue";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
h3 {
  margin-bottom: 1.5rem;
  font-size: 2.4rem;
  font-weight: 700;
}

.post {
  margin-bottom: 1.5rem;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-move {
  transition: transform 0.5s ease;
}
</style>
