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

  const isSignInPath = !!to.path.match('^/(?:en|fr)/sign-in(?:[/]?.*)')?.length;

  const isVerifyPath = !!to.path.match('^/(?:en|fr)/account/verify')?.length;

  if (user) {
    if (!user.emailVerified && !isVerifyPath) {
      return navigateTo(`/${locale}/account/verify`);
    }
    if (user.emailVerified && isVerifyPath) {
      return navigateTo(`/${locale}`);
    }
    if (isSignInPath) {
      return navigateTo(`/${locale}`);
    }
  }

  if (!user && !isSignInPath) {
    return navigateTo(`/${locale}/sign-in`);
  }

  return null;
});
