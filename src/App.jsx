import React, { Suspense, lazy } from "react";
// import CreateNewButton from "./components/CreateNewButton";

const CreateNewButton = lazy(() => import("./components/CreateNewButton"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <CreateNewButton />
      </Suspense>
    </>
  );
};

export default App;
