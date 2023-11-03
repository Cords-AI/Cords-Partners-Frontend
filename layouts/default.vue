<template>
  <HeaderComponent :user="user" />
  <slot />
  <FooterComponent />
</template>

<script lang="ts" setup>
import Backend from '~/src/Backend';

const user = await Backend.getInstance().getUser();
</script>
