import React from "react";
import { ClockCursorSize } from "../enum";
import { IRenderFunc } from "../models";
import "./ClockCursor.scss";

export interface IClockCursorProps {
    onRenderCursor?: IRenderFunc<number, ClockCursorSize>;
    angle: number;
    size?: ClockCursorSize;
}

// tslint:disable-next-line: variable-name
export const ClockCursor: React.FunctionComponent<IClockCursorProps> = (props) => {
    const {
        size,
        angle,
        onRenderCursor
    } = props;

    const style: React.CSSProperties = React.useMemo(() => {
        switch (size) {
            case ClockCursorSize.Small:
                return {
                    height: "25%",
                    top: "25%",
                    left: "50%"
                };
            case ClockCursorSize.Middle:
                return {
                    height: "35%",
                    top: "15%",
                    left: "50%",
                };
            case ClockCursorSize.Large:
            default:
                return {
                    height: "45%",
                    top: "5%",
                    left: "50%"
                };
        }
    }, [size]);

    const renderDefaultCursor: IRenderFunc<number> = React.useCallback((newAngle?: number) => {
        return <div className="clock-cursor-wrapper" style={{ transform: `rotate(${newAngle || 0}deg)`, ...style }}>
            <div className="clock-cursor-root" />
        </div>;
    }, [style]);

    const renderFunc: IRenderFunc = React.useCallback(() => {
        const tempSize: ClockCursorSize = size || ClockCursorSize.Large;
        if (onRenderCursor) {
            return onRenderCursor(angle, tempSize);
        }
        return renderDefaultCursor(angle, tempSize);
    }, [size, onRenderCursor, renderDefaultCursor, angle]);

    return <>{renderFunc()}</>;
};
