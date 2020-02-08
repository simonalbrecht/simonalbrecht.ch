<template>
    <Layout>
        <standalone-content :page="$page.page" />
    </Layout>
</template>

<page-query>
    query Standalone ($id: ID!) {
        page: standalone(id: $id) {
            title,
            author,
            intro,
            content,
        }
    }
</page-query>

<script>
  import StandaloneContent from '~/components/StandaloneContent';

  export default {
    components: {
      StandaloneContent,
    },
    metaInfo() {
      return {
        title: this.$page.page.title,
        meta: [
          { name: 'author', content: this.$page.page.author }
        ],
      }
    }
  }
</script>
