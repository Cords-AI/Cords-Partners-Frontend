<template>
  <div class="content">
    <div class="panel">
      <div class="text-h5">API Key</div>
      <div class="code">{{apiKey}}</div>
      <a href="#" @click.prevent="onRefresh">Refresh</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding: 40px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .panel {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .code {
    background-color: #000000;
    border-radius: 3px;
    padding: 10px;
    color: #ffffff;
    font-family: monospace;
  }
}
</style>

<script lang="ts" setup>
import Backend from '~/src/Backend';

const backend = Backend.getInstance();
const apiKey = ref(await backend.getApiKey());

const onRefresh = async () => {
  if(!confirm("Existing key will be revoked! Are you sure you want to continue?")) {
    return;
  }
  apiKey.value = await backend.getApiKey(true);
}
</script>
