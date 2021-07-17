import React from "react";
import "./_sidebar.scss";

import {
  MdExitToApp,
  MdExplore,
  MdHistory,
  MdHome,
  MdSubscriptions,
  MdThumbUp,
  MdVideoLibrary,
} from "react-icons/md";

export const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>

      <li>
        <MdExplore size={23} />
        <span>Explore</span>
      </li>

      <li>
        <MdSubscriptions size={23} />
        <span>Subscription</span>
      </li>

      <hr />
      <li>
        <MdVideoLibrary size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdThumbUp size={23} />
        <span>Like</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <hr />
      <li>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
      <hr />
    </nav>
  );
};
