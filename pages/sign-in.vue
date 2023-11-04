<template>
  <div class="align-center">
    <CordsKitButton
      type="submit"
      @click="onContinueWithGoogle"
    >
      Continue with Google
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

const onContinueWithGoogle = async () => {
  const auth = getAuth(firebaseApp);
  const response = await signInWithPopup(auth, provider);
  await backend.signIn(response.user.accessToken);
  window.location.reload();
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
