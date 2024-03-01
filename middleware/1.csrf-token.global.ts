export default defineNuxtRouteMiddleware(async (to, from) => {
  const csrfToken = useState('csrf-token');

  if (!csrfToken.value) {
    const runtimeConfig = useRuntimeConfig();
    const url = `${runtimeConfig.public.PLATFORM_API_URL}/csrf-token`;
    const options: any = {
      credentials: 'include',
    };
    const response: any = await fetch(url, options);
    const json = await response.json();

    csrfToken.value = json['csrf-token'];
  }

  return null;
});
