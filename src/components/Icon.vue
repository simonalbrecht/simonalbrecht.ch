<template>
    <component class="inline fill-current" :is="icon" />
</template>

<script>
    export default {
      props: {
        name: {
          type: String,
          required: true,
        }
      },
      computed: {
        icon() {
          return () => import(`~/assets/icons/${this.name}.svg`)
        }
      }
    }
</script>
