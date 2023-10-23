<template>
  <KitButton type="submit" @click="onContinueWithGoogle">Continue with Google</KitButton>
</template>

<script lang="ts" setup>
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const router = useRouter();

const provider = new GoogleAuthProvider();

const firebaseApp: any = inject('firebaseApp');

const onContinueWithGoogle = async () => {
  const auth = getAuth(firebaseApp);
  const response = await signInWithPopup(auth, provider);
  router.push('/profile');
}
</script>
