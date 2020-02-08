<template>
    <Layout>
        <header class="flex-auto mb-4" v-if="page.intro">
            <h1 class="font-bold text-3xl md:text-6xl" v-html="page.intro" />
        </header>
        <hr class="mb-8 md:mb-8 border-2 md:border-2 w-2/6 md:w-1/4 border-accent">

        <section class="flex-auto mb-8 leading-normal" v-html="page.content" />

        <footer class="flex flex-row">
            <a class="flex-initial mr-4 text-white hover:text-accent border-0 hover:border-0 opacity-75 hover:opacity-100" v-for="link in page.links" :key="link.title" :href="link.url" :title="link.title">
                <Icon class="h-6 md:h-6 w-auto fill-current" :name="link.icon" />
            </a>
        </footer>
    </Layout>
</template>

<script>
  import Icon from '~/components/Icon';

  export default {
    components: {
      Icon,
    },
    props: {
      page: {
        type: Object,
        required: true,
      }
    }
  }
</script>
