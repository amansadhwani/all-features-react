import React from 'react';
import { useCountContext } from './CountProvider';
function Count() {
  const count = useCountContext();
  console.log('Count');
  return <div>Count is: {count}</div>;
}
export default Count;