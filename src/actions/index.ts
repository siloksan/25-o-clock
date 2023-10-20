export const start = (state, action) => {
  console.log(action)
  state.isRun = !state.isRun;
};

export const timerWorks = (state, action) => {
  state.time -= 1000
}