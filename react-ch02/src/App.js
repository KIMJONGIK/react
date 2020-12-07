const { default: Average } = require("./Average");
const { default: AverageUseCallback } = require("./AverageUseCallback");
const { default: AverageUseMemo } = require("./AverageUseMemo");
const { default: InfoCustomHooks } = require("./InfoCustomHooks");
const { default: UseReducerComponent } = require("./UseReducerComponent");
const { default: UseReducerObjComponent } = require("./UseReducerObjComponent");
const { default: UseStateComponent } = require("./UseStateComponent");

function App() {
  return (
    <>
      {/* <UseStateComponent /> */}
      {/* <UseReducerComponent></UseReducerComponent> */}
      {/* <UseReducerObjComponent /> */}
      {/* <Average /> */}
      {/* <AverageUseMemo /> */}
      {/* <AverageUseCallback /> */}
      <InfoCustomHooks />
    </>
  );
}

export default App;
