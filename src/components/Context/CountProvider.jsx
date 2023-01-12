import React, { useContext } from 'react';
const CountContext = React.createContext();
export function useCountContext() {
  const value = useContext(CountContext);
  return value;
}
function CountProvider({ count, children }) {
  return (
    <CountContext.Provider value={count}>{children}</CountContext.Provider>
  );
}
export default CountProvider;