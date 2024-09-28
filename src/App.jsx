import { LazyMotion, MotionConfig, domAnimation } from "framer-motion";
import React, { Suspense, createContext, lazy, useState } from "react";

const CreateNewButton = lazy(() => import("./components/CreateNewButton"));
const MuteButton = lazy(() => import("./components/MuteButton"));

export const muteButtonContext = createContext();

const App = () => {
  const [isMute, setIsMute] = useState(false);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {/* use context for mute state management throughout the app */}
        <muteButtonContext.Provider value={{ isMute, setIsMute }}>
          {/* reduce bundle size */}
          <LazyMotion features={domAnimation} strict>
            {/* for accessibility */}
            <MotionConfig reducedMotion="user">
              <MuteButton />
              <CreateNewButton />
            </MotionConfig>
          </LazyMotion>
        </muteButtonContext.Provider>
      </Suspense>
    </>
  );
};

export default App;
