<template>
  <KitButton @click="onSignOut">Sign Out</KitButton>
</template>

<script lang="ts" setup>
import { getAuth, signOut } from 'firebase/auth';

const firebaseApp: any = inject('firebaseApp');

const router = useRouter();

const onSignOut = async () => {
  const auth = getAuth(firebaseApp);
  await signOut(auth);
  router.push('/sign-in');
}
</script>
