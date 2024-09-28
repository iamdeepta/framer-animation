import React, { useContext } from "react";
import { CiVolumeMute } from "react-icons/ci";
import { GoUnmute } from "react-icons/go";
import { muteButtonContext } from "../App";

const MuteButton = () => {
  const { isMute, setIsMute } = useContext(muteButtonContext);

  //toggle mute button
  const toggleMute = () => {
    setIsMute((isMute) => !isMute);
  };

  return (
    <button className="mute-button" onClick={toggleMute}>
      {isMute ? (
        <CiVolumeMute className="mute-icon" />
      ) : (
        <GoUnmute className="mute-icon" />
      )}
    </button>
  );
};

export default MuteButton;
