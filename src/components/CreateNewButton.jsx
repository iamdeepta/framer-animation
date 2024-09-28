import { m } from "framer-motion";
import React, { useContext, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { muteButtonContext } from "../App";
import ButtonContent from "./ButtonContent";

const CreateNewButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isMute } = useContext(muteButtonContext);

  //set duration
  const duration = 0.5;

  //button body styles
  const buttonInitial = {
    height: "50px",
    width: "150px",
    backgroundColor: "white",
    borderRadius: "25px",
  };

  const buttonVariants = {
    open: {
      height: "160px",
      width: "210px",
      backgroundColor: "rgb(255, 241, 228)",
      borderRadius: "12px",
    },
    closed: {
      height: "50px",
      width: "150px",
      backgroundColor: "white",
      borderRadius: "25px",
    },
  };

  //button text styles
  const buttonTextInitials = {
    fontSize: "14px",
    padding: "0px 0px",
  };

  const buttonTextVariants = {
    open: {
      fontSize: "10px",
      paddingTop: "10px",
    },
    closed: {
      fontSize: "14px",
      paddingTop: "0px",
    },
  };

  //add icon styles
  const addIconInitials = {
    display: "block",
  };

  const addIconVariants = {
    open: { display: "none" },
    closed: { display: "block" },
  };

  //create new text styles
  const createNewTextInitials = { x: 0, position: "relative" };

  const createNewTextVariants = {
    open: {
      x: -60,
      position: "absolute",
    },
    closed: {
      x: 0,
      position: "relative",
    },
  };

  //close icon styles
  const closeIconInitials = {
    display: "none",
    x: 0,
    position: "absolute",
    opacity: 0,
    fontSize: "12px",
  };

  const closeIconVariants = {
    open: {
      display: "block",
      opacity: 1,
      x: 80,
    },
    closed: {
      display: "none",
      opacity: 0,
      x: 0,
    },
  };

  //if button is expand
  const openButton = () => {
    if (!isOpen) {
      if (!isMute) {
        //sound
        const sound = new Audio("pop.mp3");
        sound.play(); //Add sound
      }
      setIsOpen(true);
    }
  };

  //if button gets shrinked
  const closeButton = (e) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <>
      <m.button
        onClick={openButton}
        initial={buttonInitial}
        animate={isOpen ? "open" : "closed"}
        variants={buttonVariants}
        transition={{ duration }}
      >
        <m.span
          className="button-text"
          initial={buttonTextInitials}
          animate={isOpen ? "open" : "closed"}
          variants={buttonTextVariants}
          transition={{ duration }}
        >
          <m.span
            initial={addIconInitials}
            animate={isOpen ? "open" : "closed"}
            variants={addIconVariants}
          >
            <FiPlus className="plus-icon" />
          </m.span>
          <m.span
            initial={createNewTextInitials}
            animate={isOpen ? "open" : "closed"}
            variants={createNewTextVariants}
            transition={{ duration }}
          >
            Create New
          </m.span>
          <m.span
            initial={closeIconInitials}
            animate={isOpen ? "open" : "closed"}
            variants={closeIconVariants}
            transition={{ duration }}
          >
            <AiFillCloseCircle
              className="close-icon"
              onClick={(e) => closeButton(e)}
            />
          </m.span>
        </m.span>

        {isOpen && <ButtonContent isOpen={isOpen} />}
      </m.button>
    </>
  );
};

export default CreateNewButton;
