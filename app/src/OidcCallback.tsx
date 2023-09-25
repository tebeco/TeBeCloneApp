import { useEffect } from "react"
import { useHistory } from "react-router";
import { useSessionContext } from './contexts/SessionContext';

export const OidcCallback = () => {
  const [, setSessionContext] = useSessionContext()
  const history = useHistory();

  useEffect(() => {
    setSessionContext({ userName: "FooBar" });
    history.push('/');
  }, [setSessionContext, history]);

  return (<h1>oidc callback</h1>)
}
