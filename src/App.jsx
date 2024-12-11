import React from "react";
import UserData from "./components/UserData";
import Counter from "./components/Counter";

const App = () => {
  return (
    <React.Fragment>
      <div className="h-screen bg-zinc-900">
        {/*<UserData />*/}
        <Counter/>
        <Counter/>
      </div>
    </React.Fragment>
  );
};

export default App;
