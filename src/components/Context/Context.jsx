import useCounter from './useCounter';
import CountProvider from './CountProvider';
import CountActionsProvider from './CountActionsProvider';
import Counter from './Counter';



const Context = () => {
  const { count, increase, decrease } = useCounter({ initialCount: 5 });
  return (
    <>
      <CountProvider count={count}>
        <CountActionsProvider increase={increase} decrease={decrease}>
          <Counter />
        </CountActionsProvider>
      </CountProvider>
    </>
  );
}

export default Context
