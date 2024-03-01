<template>
  <div class="content">
    <div class="content-panel">
      <div class="text-h5">
        {{ t('api-key') }}
      </div>
      <div class="code">
        {{ apiKey }}
      </div>
      <a
        href="#"
        @click.prevent="onRefresh"
      >
        {{ t('refresh') }}
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n({
  useScope: 'local',
});

const apiKey = ref(await PlatformApi.getApiKey());

const onRefresh = async () => {
  // eslint-disable-next-line
  if (!confirm(t('confirm'))) {
    return;
  }
  apiKey.value = await PlatformApi.getApiKey(true);
};
</script>

<i18n lang="yaml">
en:
  refresh: Refresh
  confirm: Existing key will be revoked! Are you sure you want to continue?
  api-key: API Key
fr:
  refresh: Rafraîchir
  confirm: La clé existante sera révoquée ! Êtes-vous sûr de vouloir continuer ?
  api-key: Clé API
</i18n>

<style lang="scss" scoped>
.content {
  padding: 40px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .content-panel {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .code {
    background-color: #1d1c3b;
    border-radius: 3px;
    padding: 10px;
    color: #ffffff;
    font-family: monospace;
  }
}
</style>
