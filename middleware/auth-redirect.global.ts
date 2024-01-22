import { getFirebaseUser } from '~/src/getFirebaseUser';

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

  const user = await getFirebaseUser();

  const signInPath = to.path.match('^/(?:en|fr)/sign-in(?:[/]?.*)');

  if (user && signInPath) {
    return navigateTo(`/${locale}`);
  }

  if (!user && !signInPath) {
    return navigateTo(`/${locale}/sign-in`);
  }

  return null;
});
