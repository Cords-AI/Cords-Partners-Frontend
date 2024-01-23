<template>
  <div class="panel">
    <h1 class="title">
      {{ t('cords-partner-portal') }}
    </h1>
    <CordsKitButton
      outline="false"
      @click="onContinueWithGoogle"
    >
      {{ t('sign-in-with-google') }}
    </CordsKitButton>
    <div class="or">
      <div class="separator" />
      <div>{{ t('or') }}</div>
      <div class="separator" />
    </div>
    <NuxtLink
      class="sign-in-with-email-link"
      :to="localePath('/sign-in/email')"
    >
      {{ t('sign-in-with-email') }}
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Backend from '~/src/Backend';

const { t } = useI18n({
  useScope: 'local',
});

const router = useRouter();

const provider = new GoogleAuthProvider();

const firebaseApp: any = inject('firebaseApp');

const q = useQuasar();

const onContinueWithGoogle = async () => {
  const auth = getAuth(firebaseApp);
  const response = await signInWithPopup(auth, provider);
  window.location.href = '/';
};
</script>

<style lang="scss" scoped>
.sign-in-with-email-link {
  text-decoration: none;
  color: rgb(71, 82, 102);
}
</style>

<i18n lang="yaml">
en:
  sign-in-with-google: Continue with Google
  sign-in-with-email: Continue with email
  or: or
  not-implemented: Not Implemented
  cords-partner-portal: Partners
fr:
  sign-in-with-google: Connexion avec Google
  sign-in-with-email: Connexion avec courriel
  or: ou
  not-implemented: Non disponible
  cords-partner-portal: Partenaires
</i18n>
