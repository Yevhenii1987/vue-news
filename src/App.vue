<!-- <script setup>
  import { RouterLink, RouterView } from "vue-router";
</script> -->

<template>
  <h1>Blog page</h1>
  <ui-input
    v-model="searchQuery"
    @input="searchPosts"
    placeholder="Search..."
  ></ui-input>
  <div class="app__btns">
    <ui-button @click="showDialog">Create post</ui-button>
    <ui-select v-model="sortedBy" :options="sortOptions"></ui-select>
  </div>
  <ui-dialog v-model:show="dialogVisible">
    <post-form @create="createPost" />
  </ui-dialog>
  <post-list
    v-if="!isPostsLoading"
    @remove="removePost"
    :posts="sortedAndSearchedPosts"
  />
  <div class="loader" v-else>Loading posts...</div>
  <div ref="observed" class="observe-item"></div>
  <!-- <div class="pagination">
    <button
      v-for="pageNum in totalPages"
      :key="pageNum"
      class="pagination__page"
      :class="{ 'pagination__page--current': page === pageNum }"
      @click="changePage(pageNum)"
    >
      {{ pageNum }}
    </button>
  </div> -->
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import axios from "axios";

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      page: 1,
      limit: 10,
      totalPages: 0,
      searchQuery: "",
      sortedBy: "",
      sortOptions: [
        {
          value: "title",
          name: "Sort by title",
        },
        {
          value: "body",
          name: "Sort by content",
        },
      ],
    };
  },
  computed: {
    sortedPosts() {
      return [
        ...this.posts.sort((post1, post2) =>
          post1[this.sortedBy]?.localeCompare(post2[this.sortedBy])
        ),
      ];
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    changePage(pageNum) {
      this.page = pageNum;
      // this.fetchPosts();
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        // setTimeout(async () => {
        //   const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
        //   this.posts = response.data;
        //   this.isPostsLoading = false;
        // }, 500);
        // this.posts = response.data;
        // this.isPostsLoading = false;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.posts = response.data;
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
      } catch (err) {
        throw new Error(err);
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.posts = [...this.posts, ...response.data];
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  mounted() {
    this.fetchPosts();

    const observerCallback = (entries, observer) => {
      console.log(entries);
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        console.log("intersecting");
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    });

    observer.observe(this.$refs.observed);
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
    // Another implementation of sorting posts
    // sortedBy(newValue) {
    //   this.posts.sort((post1, post2) => {
    //     return post1[newValue]?.localeCompare(post2[newValue]);
    //   });
    // },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1.5rem;
  font-size: 3rem;
  font-weight: 700;
}
.loader {
  font-size: 2rem;
}
.app__btns {
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
}
.btn {
  margin-right: 1rem;
  font-size: 2rem;
  border: 1px solid var(--color-background-forth);
  background: var(--color-background-forth);
}

.btn:hover {
  background: var(--color-background-third);
  border: 1px solid var(--color-background-third);
}

.observe-item {
  width: 100%;
  height: 3rem;
  background: var(--color-background-forth);
}

.pagination {
  margin-top: 3rem;
  display: grid;
  grid-auto-flow: column;
  column-gap: 1rem;
  justify-content: center;
}
.pagination__page {
  padding: 1rem;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text-second);
  transition: all .2s;
  cursor: pointer;
}
.pagination__page:hover,
.pagination__page--current {
  color: var(--color-text);
  border-color: var(--color-background-forth);
  background: var(--color-background-forth);
}

@media (min-width: 1024px) {
}
</style>
