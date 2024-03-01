<template>
  <div class="content">
    <div class="content-panel">
      <div class="text-h5">
        {{ t('api-key') }}
      </div>
      <div class="code">
        00000000000000000000000000000000
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const localePath = useLocalePath();
const { t } = useI18n({
  useScope: 'local',
});
</script>

<i18n lang="yaml">
en:
  api-key: API Key
fr:
  api-key: Clé API
</i18n>
