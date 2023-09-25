import { useHistory } from "react-router";
import { defaultSession, useSessionContext } from './contexts/SessionContext';

export const Home = () => {
  const [sessionContext, setSessionContext] = useSessionContext();

  const history = useHistory();

  return (<>
    <p>Hello {sessionContext.userName}</p>
    <button onClick={() => {
      setSessionContext(defaultSession)
      history.push('/')
    }}>sign out</button>
  </>);
}
