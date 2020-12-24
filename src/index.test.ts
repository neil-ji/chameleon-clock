import React from "react";
import { render } from "react-dom";
import { Clock, IClockProps } from "./components";

const app: React.FunctionComponentElement<IClockProps> = React.createElement(Clock, { date: new Date() });

render(app, document.getElementById("react-clock"));