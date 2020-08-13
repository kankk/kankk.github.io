<template>
  <div>
    <div>Article List</div>
    <p v-for="article of articles">
      <a :href="article.path">{{ article.title }}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ArticlList',
  computed: {
    articles() {
      return this.$themeConfig.sidebar['/articles'];
    }
  },
  mounted() {
    console.log(this);
  }
}
</script>