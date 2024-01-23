<template>
  <div class="panel">
    <h1 class="title">
      {{ t('create-account') }}
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
      @click="onCreateAccount"
    >
      {{ t('create-account') }}
    </CordsKitButton>
  </div>
</template>

<script lang="ts" setup>
import {
  createUserWithEmailAndPassword, getAuth, sendEmailVerification, type UserCredential,
} from 'firebase/auth';

const { t } = useI18n({
  useScope: 'local',
});

const q = useQuasar();

const email = ref();

const password = ref();

const isPwd = ref(true);

const existsError = ref(false);

const onCreateAccount = async () => {
  existsError.value = false;
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((userCredential: UserCredential) => {
      sendEmailVerification(userCredential.user)
        .then(() => {
          window.location.href = '/';
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      q.notify(t('email-exists'));
    });
};
</script>

<i18n lang="yaml">
en:
  sign-in: Sign in
  email: Email
  password: Password
  create-account: Create account
  email-exists: An account already exists with this email address
fr:
  sign-in: Connexion
  email: Courriel
  password: Mot de passe
  create-account: Créer un compte
  email-exists: Un compte existe déjà avec cette adresse courriel
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
.error {
  color: #ff0000;
}
</style>
