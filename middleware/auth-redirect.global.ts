export default defineNuxtRouteMiddleware(async (to, from) => {
  const config = useRuntimeConfig();
  const apiUrl = config.API_URL_SSR || config.public.API_URL;
  const user = await $fetch(`${apiUrl}/user`);

  if (user.id && to.path === '/sign-in') {
    return navigateTo('/');
  }

  if (!user.id && to.path !== '/sign-in') {
    return navigateTo('/sign-in');
  }

  return null;
});
