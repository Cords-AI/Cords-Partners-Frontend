<template>
  <div class="content">
    <div class="content-panel">
      <div class="text-h5">
        {{ t('api-keys') }}
      </div>
      <div class="code">
        {{ apiKey }}
      </div>
      <div>
        <NuxtLink :to="localePath('/api-key')">
          <CordskitButton>{{ t('add-key') }}</CordskitButton>
        </NuxtLink>
      </div>
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

const localePath = useLocalePath();

const config = useRuntimeConfig().public;
console.log(config);

</script>

<i18n lang="yaml">
en:
  refresh: Refresh
  confirm: Existing key will be revoked! Are you sure you want to continue?
  api-keys: API Keys
  add-key: Add key
fr:
  refresh: Rafraîchir
  confirm: La clé existante sera révoquée ! Êtes-vous sûr de vouloir continuer ?
  api-keys: Clés API
  add-key: Ajouter une clé
</i18n>

<style lang="scss" scoped>
</style>
