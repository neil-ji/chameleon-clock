import React from "react";
import "./ClockDial.scss";
import { IRenderFunc } from "../models";

export interface IClockDialProps {
    onRenderScale?: IRenderFunc;
}

// tslint:disable-next-line: variable-name
export const ClockDial: React.FunctionComponent<IClockDialProps> = (props) => {
    const {
        onRenderScale,
    } = props;

    const renderFunc: IRenderFunc = React.useCallback(() => {
        if (onRenderScale) {
            return onRenderScale();
        }
        return <div className="clock-dial-root" />;
    }, [onRenderScale]);

    return <>{renderFunc()}</>;
};
