<template>
  <div class="panel">
    <h1 class="title">
      {{ t('success') }}
    </h1>
    <div class="spam">
      <p>{{ t('spam') }}</p>
    </div>
    <CordsKitButton
      outline="false"
      :to="localePath('/')"
    >
      {{ t('sign-in') }}
    </CordsKitButton>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n({
  useScope: 'local',
});

const localePath = useLocalePath();
</script>

<i18n lang="yaml">
en:
  success: A password reset email has been sent.
  sign-in: Sign in
  spam: If it's not in your inbox, please make sure to check your spam folder.
fr:
  sign-in: Connexion
  success: Un courriel de réinitialisation du mot de passe a été envoyé.
  spam: Si elle n'est pas dans votre boîte de réception, vérifiez votre dossier de courrier indésirable.
</i18n>

<style lang="scss" scoped>
.panel {
  gap: 20px;
  max-width: 100%;
  text-align: center;
  .spam {
    margin-bottom: 20px;
  }
  button {
    max-width: 200px;
  }
}
</style>
