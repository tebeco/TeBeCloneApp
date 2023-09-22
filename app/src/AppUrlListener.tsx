import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { App, URLOpenListenerEvent } from '@capacitor/app';

export const AppUrlListener = () => {
  const history = useHistory();
  useEffect(() => {
    App.addListener('appUrlOpen', (event: URLOpenListenerEvent) => {
      // Example url: https://hostname/foo/bar
      // slug = /foo/bar
      const slug = event.url.split(import.meta.env.VITE_MOBILE_HOSTNAME).pop();

      if (slug) {
        history.push(slug);
      }

      // If no match, do nothing - let regular routing
      // logic take over
    });
  }, [history]);

  return null;
};
