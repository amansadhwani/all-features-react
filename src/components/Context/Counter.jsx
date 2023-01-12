import React from 'react';
import Count from './Count';
import CountIncreaser from './CountIncreaser';
import CountDecreaser from './CountDecreaser';
const Counter = React.memo(() => {
  return (
    <>
      <Count />
      <CountIncreaser />
      <CountDecreaser />
    </>
  );
});
export default Counter;