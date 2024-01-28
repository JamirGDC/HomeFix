import React from "react";

import {
    HomeIcon,
    UserCircleIcon,
    TableCellsIcon,
    InformationCircleIcon,
    ServerStackIcon,
    RectangleStackIcon,
    UserGroupIcon,
    QuestionMarkCircleIcon,
    PaperAirplaneIcon,
  } from "@heroicons/react/24/solid";
  import { Home, Profile, Chathomefix, Tables, Notifications } from "./pages/dashboard";
  import { SignIn, SignUp } from "./pages/auth";
  
  const icon = {
    className: "w-5 h-5 text-inherit",
  };
  
  export const routes = [
    {
      layout: "dashboard",
      pages: [
        {
          icon: <HomeIcon {...icon} />,
          name: "Home",
          path: "/home",
          element: <Home />,
        },
        {
          icon: <UserCircleIcon {...icon} />,
          name: "Perfil",
          path: "/profile",
          element: <Profile />,
        },
        {
          icon: <UserGroupIcon {...icon} />,
          name: "Acerca de",
          path: "/notifications",
          element: <Notifications />,
        },
        {
          icon: <QuestionMarkCircleIcon {...icon} />,
          name: "Preguntas",
          path: "/notifications",
          element: <Notifications />,
        },
        {
          icon: <PaperAirplaneIcon {...icon} />,
          name: "Contactanos",
          path: "/notifications",
          element: <Notifications />,
        },
        {
          icon: <RectangleStackIcon {...icon} />,
          name: "chat",
          path: "/chathomefix",
          element: <Chathomefix />,
        },
      ],
    },
    {
      title: "auth pages",
      layout: "auth",
      pages: [
        {
          icon: <ServerStackIcon {...icon} />,
          name: "sign in",
          path: "/sign-in",
          element: <SignIn />,
        },
        {
          icon: <RectangleStackIcon {...icon} />,
          name: "sign up",
          path: "/sign-up",
          element: <SignUp />,
        },
        
      ],
    },
  ];
  
  export default routes;