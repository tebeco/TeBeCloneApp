import { PropsWithChildren, createContext, useContext, useState } from 'react';

type Session = {
  userName: string | null;
}

export const defaultSession: Session = {
  userName: null
}

export const SessionContext = createContext<[Session, (session: Session) => void]>([defaultSession, () => { }]);
export const useSessionContext = () => useContext(SessionContext);

export const SessionContextProvider = ({ children }: PropsWithChildren) => {
  const [sessionState, setSessionState] = useState(defaultSession);
  const defaultSessionContext: [Session, typeof setSessionState] = [sessionState, setSessionState];

  return (
    <SessionContext.Provider value={defaultSessionContext}>
      {children}
    </SessionContext.Provider>
  );
}
