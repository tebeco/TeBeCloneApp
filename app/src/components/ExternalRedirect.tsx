import { Route, RouteProps } from 'react-router-dom';

export const ExternalRedirect = ({ ...routeProps }: RouteProps) => {
  return <Route {...routeProps} render={() => {
    const params = new URLSearchParams(window.location.search);
    const externalUrl = params.get('externalUrl') ?? '/';

    window.location.assign(externalUrl);

    return null;
  }} />;
};
