import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';
import { useHistory } from 'react-router';

type THistory<T = unknown> = ReturnType<typeof useHistory<T>>

const openSignInSite = async (history: THistory) => {

  if (Capacitor.isNativePlatform()) {
    // https://hostname/oidc/callback
    const redirectUrl = encodeURI(`${import.meta.env.VITE_MOBILE_SCHEME}://${import.meta.env.VITE_MOBILE_HOSTNAME}${import.meta.env.VITE_OIDC_REDIRECT_URI}`);
    const signInUrl = `${import.meta.env.VITE_OIDC_AUTHORITY}?redirectUrl=${redirectUrl}`

    await Browser.open({ url: signInUrl });
  }
  else {
    // https://origin/oidc/callback
    const redirectUrl = encodeURI(`${window.location.origin}${import.meta.env.VITE_OIDC_REDIRECT_URI}`);
    const signInUrl = `${import.meta.env.VITE_OIDC_AUTHORITY}?redirectUrl=${redirectUrl}`

    history.push({
      pathname: '/external-redirect',
      search: `?externalUrl=${signInUrl}`,
    });
  }
};

export const Landing = () => {
  const history = useHistory();

  return (
    <div className="card">
      <button onClick={async () => openSignInSite(history)}>Sign In</button>
    </div>
  )
}
