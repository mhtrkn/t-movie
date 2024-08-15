"use client";

import store from "@/store/store";
import React from "react";
import { Provider } from "react-redux";
import { RouteListener } from "@/utils/route-listener";
import BrowserRouter from "./browser-router";

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <RouteListener />
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  );
};
