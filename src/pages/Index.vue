<template>
    <Layout>
        <standalone-content :page="$page.page" />
    </Layout>
</template>

<page-query>
    query {
        page: standalone(id: "index") {
            title,
            author,
            intro,
            content,
            links {
                icon,
                title,
                url
            }
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
