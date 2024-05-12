import { React, createContext, useContext, useState } from "react";

const TimerContext = createContext(0);
const TimerProvider = () => {
  useContext(TimerContext);
};
