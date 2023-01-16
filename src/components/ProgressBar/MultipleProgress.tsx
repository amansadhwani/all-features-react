export const MultipleProgress = () => {
  let total_progress:any = [];
  let start = false;

  const addProgress = () => {
    let main_div: any = document.getElementById("main-container");
    let new_div = document.createElement("div");
    new_div.classList.add("bar");
    main_div.appendChild(new_div);
    total_progress.push(new_div);
    console.log(total_progress);
    if (!start) {
      startProgress();
      start = true;
    }
  };
  const startProgress = () => {
    let div_to_pain = total_progress.shift();
    if (!div_to_pain) {
      start = false;
      return;
    }
    let width = 2;
    let interval = setInterval(() => {
      if (width === 100) {
        clearInterval(interval);
        startProgress();
        return;
      }
      div_to_pain.style.width = `${width}%`;
      width += 2;
    }, 100);
  };
  return (
    <div>
      <button onClick={() => addProgress()}>Add Progress BAr</button>
      <div id="main-container"></div>
    </div>
  );
};
