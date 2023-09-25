import { Capacitor } from '@capacitor/core';
import { Browser } from '@capacitor/browser';
import { Redirect, useHistory } from 'react-router';
import { useSessionContext } from './contexts/SessionContext';

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
  const [context] = useSessionContext();
  const history = useHistory();

  return (context.userName)
    ? (<Redirect to="/home" />)
    : (
      <div className="card">
        <button onClick={async () => openSignInSite(history)}>Sign In</button>
      </div>
    )
}
