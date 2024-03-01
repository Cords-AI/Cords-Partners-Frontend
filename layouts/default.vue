<template>
  <CordskitHeader :user="user" />
  <slot />
  <CordskitFooter />
</template>

<script lang="ts" setup>
const user = useState('user');

useHead({
  title: 'CORDS Platform',
});
</script>
