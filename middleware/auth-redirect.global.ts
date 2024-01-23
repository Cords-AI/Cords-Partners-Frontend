import { getFirebaseUser } from '~/src/getFirebaseUser';

declare const window: any;

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

  const user: any = await getFirebaseUser();
  window.user = user;

  const signInPath = !!to.path.match('^/(?:en|fr)/sign-in(?:[/]?.*)')?.length;

  if (!user && !signInPath) {
    return navigateTo(`/${locale}/sign-in`);
  }

  if (user && !user.emailVerified && !signInPath) {
    return navigateTo(`/${locale}/sign-in/verify`);
  }

  if (user && user.emailVerified && signInPath) {
    return navigateTo(`/${locale}`);
  }

  return null;
});
