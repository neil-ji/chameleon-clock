import React from "react";
import "./ClockDial.scss";
import { IClockDialStyles, IRenderFunc } from "../models";

export interface IClockDialProps {
    styles?: IClockDialStyles;
    onRenderScale?: IRenderFunc;
}

// tslint:disable-next-line: variable-name
export const ClockDial: React.FunctionComponent<IClockDialProps> = (props) => {
    const {
        styles,
        onRenderScale,
    } = props;

    const renderFunc: IRenderFunc = React.useCallback(() => {
        if (onRenderScale) {
            return onRenderScale();
        }
        return <div className={`clock-dial-root ${styles?.root}`} />;
    }, [onRenderScale]);

    return <>{renderFunc()}</>;
};
