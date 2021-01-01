import React from "react";
import { ClockCursorSize } from "../enum";
import { IClockCursorStyles, IRenderFunc } from "../models";
import "./ClockCursor.scss";

export interface IClockCursorProps {
    angle: number;
    size?: ClockCursorSize;
    styles?: IClockCursorStyles;
    onRenderCursor?: IRenderFunc;
}

// tslint:disable-next-line: variable-name
export const ClockCursor: React.FunctionComponent<IClockCursorProps> = (props) => {
    const {
        size,
        styles,
        angle,
        onRenderCursor,
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

    const cursor = React.useMemo(() => {
        return onRenderCursor
            ? onRenderCursor()
            : <div className={`clock-cursor ${styles?.cursor}`} />;
    }, [onRenderCursor, styles?.cursor]);

    return <div className={`clock-cursor-root ${styles?.root}`} style={{ transform: `rotate(${angle || 0}deg)`, ...style }}>
        {cursor}
    </div>;
};
