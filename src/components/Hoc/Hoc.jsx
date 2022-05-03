const WithHoc = (AnyComponent) => {
  const NewComponent = () => {
    return (
      <>
        <h1>Header</h1>
        <AnyComponent />
        <h1>Header</h1>
      </>
    );
  };
  return NewComponent;
};

export default WithHoc;
