<template>
  <div class="panel">
    <CordsKitButton
      @click="onContinueWithGoogle"
      outline="false"
    >
      Continue with Google
    </CordsKitButton>
    <div class="or">
      <div class="separator" />
      <div>or</div>
      <div class="separator" />
    </div>
    <CordsKitButton
      @click="onContinueWithEmail"
    >
      Continue with email
    </CordsKitButton>
  </div>
</template>

<script lang="ts" setup>
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import Backend from '~/src/Backend';

const router = useRouter();

const provider = new GoogleAuthProvider();

const firebaseApp: any = inject('firebaseApp');

const backend = Backend.getInstance();

const q = useQuasar();

const onContinueWithGoogle = async () => {
  const auth = getAuth(firebaseApp);
  const response = await signInWithPopup(auth, provider);
  await backend.signIn(response.user.accessToken);
  window.location.reload();
};

const onContinueWithEmail = async () => {
  q.notify('Not Implemented');
};
</script>

<style lang="scss">
body[data-path="sign-in"] {
  .content {
    justify-content: center;
    align-items: center;
    display: flex;
  }
}
</style>

<style lang="scss" scoped>
.panel {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 5px;
  padding: 40px;
  max-width: 400px;
  width: 100%;
  button {
    width: 100%;
  }
  .or {
    padding: 10px 0;
    display: flex;
    width: 100%;
    gap: 10px;
    text-transform: uppercase;
    font-weight: bold;
    align-items: center;
    .separator {
      flex-grow: 1;
      height: 1px;
      background-color: #D6D6D6;
    }
  }
}
</style>
