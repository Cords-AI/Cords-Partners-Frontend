<template>
  <div class="panel">
    <h1 class="title">
      {{ t('forgot-password') }}
    </h1>
    <q-input
      v-model="email"
      :label="t('email')"
      outlined
      bg-color="white"
      stack-label
      style="width:100%;"
    />
    <CordsKitButton
      outline="false"
      @click="onForgot"
    >
      {{ t('submit') }}
    </CordsKitButton>
  </div>
</template>

<script lang="ts" setup>
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const { t } = useI18n({
  useScope: 'local',
});

const q = useQuasar();

const email = ref();

const localePath = useLocalePath();

const onForgot = async () => {
  sendPasswordResetEmail(getAuth(), email.value).then(() => {
    navigateTo(localePath('/sign-in/email/forgot/sent'));
  }).catch((error) => {
    q.notify(t('error'));
  });
};
</script>

<i18n lang="yaml">
en:
  not-implemented: Non implemented
  email: Email
  submit: Submit
  forgot-password: Forgot Password
  error: An error occured. Please try again.
fr:
  sign-in: Connexion
  not-implemented: Non disponible
  email: Courriel
  submit: Soumettre
  forgot-password: Mot de passe oublié
  error: Une erreur s'est produite. Veuillez réessayer.
</i18n>

<style lang="scss" scoped>
.q-field {
  width: 100%;
}
.panel {
  gap: 20px;
}
a {
  color: unset;
  text-decoration: unset;
  color: var(--cords-gray);
}
</style>
