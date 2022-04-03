export const refreshFetch = async (url: string, objectConfig?: RequestInit) => {
  const access = localStorage.getItem('access');
  const response = await fetch(url, {
    ...objectConfig,
    headers: { Authorization: `Bearer ${access}` },
    ...objectConfig?.headers,
  });

  if (response.ok === false) {
    const error = await response.json();
    const isExpire = error.messages.some((item: { message: string }) =>
      item.message.includes('expired')
    );

    if (isExpire) {
      const refresh = localStorage.getItem('refresh');
      const accessResponse = await fetch(
        'https://studapi.teachmeskills.by/auth/jwt/refresh/',
        {
          method: 'POST',
          body: JSON.stringify({ refresh: refresh }),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (accessResponse) {
        const result = await response.json();
        localStorage.setItem('access', result.access);

        const refreshResponse = await fetch(url, {
          ...objectConfig,
          headers: { Authorization: `Bearer ${result.access}` },
          ...objectConfig?.headers,
        });
        return refreshResponse;
      }
    }
  }

  return response;
};
