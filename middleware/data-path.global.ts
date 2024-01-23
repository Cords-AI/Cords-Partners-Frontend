export default defineNuxtRouteMiddleware(async (to, from) => {
  let path = to.fullPath;
  path = path.replace(/^\/(?:en|fr)/, '');
  path = path.slice(1);
  path = path.replace('/', '--');
  if (path === '') {
    path = 'front';
  }

  useHead({
    bodyAttrs: {
      'data-path': path,
    },
  });

  return null;
});
