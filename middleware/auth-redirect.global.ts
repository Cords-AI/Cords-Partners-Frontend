import Backend from '~/src/Backend';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const backend = Backend.getInstance();
  const user = await backend.getUser();

  if (user?.id && to.path === '/sign-in') {
    return navigateTo('/');
  }

  if (!user?.id && to.path !== '/sign-in') {
    return navigateTo('/sign-in');
  }

  return null;
});
