<template>
  <div class="panel">
    <h1 class="title">
      {{ t("email-verify-message") }}
    </h1>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue';

declare const window: any;

const { t } = useI18n({
  useScope: 'local',
});

onBeforeMount(() => {
  if (!window.user) {
    navigateTo('/');
  }
});
</script>

<i18n lang="yaml">
en:
  email-verify-message: Please verify your email
fr:
  email-verify-message: Veuillez vérifier votre courriel
</i18n>

<style lang="scss" scoped>
.panel {
  max-width: 100%;
}
</style>
