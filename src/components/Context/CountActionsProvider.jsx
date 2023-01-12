import React, { useContext, useMemo } from 'react';
const CountActionsContext = React.createContext();
export function useCountActionsContext() {
  const value = useContext(CountActionsContext);
  return value;
}
function CountActionsProvider({ increase, decrease, children }) {
  const value = useMemo(() => ({ increase, decrease }), [increase, decrease]);
  return (
    <CountActionsContext.Provider value={value}>
      {children}
    </CountActionsContext.Provider>
  );
}
export default CountActionsProvider;