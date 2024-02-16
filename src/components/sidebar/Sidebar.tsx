"use client";
import React, { use } from "react";
import { ReactNode } from "react";
import { useParams, useRouter } from "next/navigation";
import { SidebarData } from "./SidebarData";
import "@/styles/Sidebar.scss";
import SidebarIcon from "./SidebarIcon";
import AuthStatus from "../auth/authStatus";

const Sidebar = () => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className='Sidebar'>
        <SidebarIcon />
        <ul className='SidebarList'>
          {SidebarData.map(({ title, icon, link }) => {
            return (
              <li
                key={link}
                id={link === params.page ? "active" : ""}
                className='row'
                onClick={() => {
                  router.push(link);
                }}
              >
                <div id='icon'>{icon}</div>
                <div id='title'>{title}</div>
              </li>
            );
          })}
        </ul>
        <AuthStatus />
      </div>
    </>
  );
};

export default Sidebar;
