import { hot } from "react-hot-loader/root";
import React from "react";
import { render } from "react-dom";
import { Clock, IClockProps } from "./components";

const app: React.FunctionComponentElement<IClockProps> = React.createElement(Clock, { date: new Date() });

const hotApp: React.FunctionComponentElement<{}> = React.createElement(hot(() => app));

render(hotApp, document.getElementById("react-clock"));