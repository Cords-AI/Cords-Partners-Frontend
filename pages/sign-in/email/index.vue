<template>
  <div class="panel">
    <h1 class="title">
      {{ t('sign-in') }}
    </h1>
    <q-input
      v-model="email"
      :label="t('email')"
      outlined
      bg-color="white"
      stack-label
      style="width:100%;"
    />
    <q-input
      v-model="password"
      outlined
      bg-color="white"
      :label="t('password')"
      :type="isPwd ? 'password' : 'text'"
    >
      <template #append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>
    <CordsKitButton
      outline="false"
      @click="onSignIn"
    >
      {{ t('sign-in') }}
    </CordsKitButton>
    <NuxtLink
      class="sign-in-with-email-link"
      :to="localePath('/sign-in/email/forgot')"
    >
      {{ t('forgot-password') }}
    </NuxtLink>
    <NuxtLink
      class="sign-in-with-email-link"
      :to="localePath('/sign-in/email/create')"
    >
      {{ t('create-account') }}
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const { t } = useI18n({
  useScope: 'local',
});

const q = useQuasar();

const email = ref();

const password = ref();

const isPwd = ref(true);

const localePath = useLocalePath();

const onSignIn = async () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      window.location.href = localePath('/');
    })
    .catch((error) => {
      q.notify(t('invalid'));
    });
};
</script>

<i18n lang="yaml">
en:
  sign-in: Sign in
  not-implemented: Non implemented
  email: Email
  password: Password
  invalid: Invalid email or password
  create-account: Create account
  forgot-password: Forgot Password?
fr:
  sign-in: Connexion
  not-implemented: Non disponible
  email: Courriel
  password: Mot de passe
  invalid: Courriel ou mot de passe invalide
  create-account: Créer un compte
  forgot-password: Mot de passe oublié ?
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
