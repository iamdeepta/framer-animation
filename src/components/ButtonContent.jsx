import { m } from "framer-motion";
import React from "react";
import {
  CiCalendar,
  CiFlag1,
  CiFolderOn,
  CiStickyNote,
  CiTrophy,
  CiViewList,
} from "react-icons/ci";

const ButtonContent = ({ isOpen }) => {
  //button inside content styles
  const contentInitials = {
    opacity: 0,
    display: "none",
  };

  const contentVariants = {
    open: {
      opacity: 1,
      display: "block",
    },
    closed: {
      opacity: 0,
      display: "none",
    },
  };

  return (
    <m.div
      className="content"
      initial={contentInitials}
      animate={isOpen ? "open" : "closed"}
      variants={contentVariants}
      transition={{ duration: 0.9 }}
    >
      <ul>
        <li>
          <CiFolderOn className="content-icon" />
          <span>Project</span>
        </li>
        <li>
          <CiViewList className="content-icon" /> <span>Task</span>
        </li>
        <li>
          <CiStickyNote className="content-icon" /> <span>Note</span>
        </li>
        <li>
          <CiTrophy className="content-icon" /> <span>Goal</span>
        </li>
        <li>
          <CiFlag1 className="content-icon" /> <span>Milestone</span>
        </li>
        <li>
          <CiCalendar className="content-icon" /> <span>Reminder</span>
        </li>
      </ul>
    </m.div>
  );
};

export default ButtonContent;
