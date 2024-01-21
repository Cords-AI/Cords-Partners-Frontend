import Backend from '~/src/Backend';

function getLocale(path: string): string {
  if (path.match('^/$')) {
    return navigator.languages[0].match('^fr') ? 'fr' : 'en';
  }
  const matches = path.match('^/(en|fr)[/]?');
  if (matches?.length) {
    return matches[1];
  }
  return 'en';
}

export default defineNuxtRouteMiddleware(async (to, from) => {
  const locale = getLocale(to.path);
  if (to.path.match('^/$')) {
    return navigateTo(`/${locale}`);
  }

  const backend = Backend.getInstance();
  const user = await backend.getUser();

  const signInPath = to.path.match('^/(?:en|fr)/sign-in(?:[/]?.*)');

  if (user?.id && signInPath) {
    return navigateTo(`/${locale}`);
  }

  if (!user?.id && !signInPath) {
    return navigateTo(`/${locale}/sign-in`);
  }

  return null;
});
