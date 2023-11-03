export default defineNuxtRouteMiddleware(async (to, from) => {
  let path = to.fullPath;
  path = path.slice(1);
  path.replace('/', '--');

  useHead({
    bodyAttrs: {
      'data-path': path
    }
  });

  return null;
});
