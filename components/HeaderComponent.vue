<template>
  <header>
    <CordsKitLogo />
    <div class="actions">
      <UserComponent :user="user" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import type User from '~/src/User';

defineProps<{user: User}>();
</script>

<style lang="scss" scoped>
header {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 64px;
  padding: 0 40px;
  color: rgb(71, 82, 102);
  border-bottom: 1px solid var(--hairline-color);

  [data-path=sign-in] & {
    .user-component {
      display: none;
    }
  }

  .actions {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: right;
  }
}
</style>
