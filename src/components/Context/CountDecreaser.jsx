import React from 'react';
import { useCountActionsContext } from './CountActionsProvider';
function CountDecreaser() {
  const { decrease } = useCountActionsContext();
  console.log('CountDecreaser');
  return <button onClick={decrease}>- Decrease</button>;
}
export default CountDecreaser;