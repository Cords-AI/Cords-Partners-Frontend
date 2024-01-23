<template>
  <header>
    <NuxtLink to="/">
      <CordsKitLogo />
    </NuxtLink>
    <div class="actions">
      <q-btn
        round
        flat
        @click="toggleLanguage"
      >
        <q-icon
          class="language-toggle-button"
          name="language"
        />
        <q-tooltip>{{ t('tooltip') }}</q-tooltip>
      </q-btn>
      <UserComponent
        v-if="user"
        :user="user"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
import type User from '~/src/User';

defineProps<{ user: User }>();

const { t } = useI18n({
  useScope: 'local',
});

const i18n = useI18n();

const switchLocalePath = useSwitchLocalePath();

const toggleLanguage = () => {
  navigateTo(switchLocalePath(i18n.locale.value === 'en' ? 'fr' : 'en'));
};
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
    align-items: center;
    gap: 10px;
  }

  .language-toggle-button {
    font-size: 24px;
  }
}
</style>

<i18n lang="yaml">
en:
  tooltip: En français
fr:
  tooltip: In English
</i18n>
