import React from "react";
import { ClockCursor } from "./ClockCursor";
import { ClockDial } from "./ClockDial";
import { HOUR_TO_ANGLE, MINUTE_TO_ANGLE, SECOND_TO_ANGLE } from "../constants";
import { ClockCursorSize } from "../enum";
import "./Clock.scss";
import { IRenderFunc } from "..";
import { IClockCursorStyles, IClockStyles } from "../models";

export interface IClockProps {
    className?: string;
    date?: Date;
    styles?: IClockStyles;
    hourCursorStyles?: IClockCursorStyles;
    minuteCursorStyles?: IClockCursorStyles;
    secondCursorStyles?: IClockCursorStyles;
    onChange?: (newDate: Date) => void;
    onRenderDial?: IRenderFunc;
    onRenderCursor?: IRenderFunc;
    onRenderHourCursor?: IRenderFunc;
    onRenderMinuteCursor?: IRenderFunc;
    onRenderSecondCursor?: IRenderFunc;
}

// tslint:disable-next-line: variable-name
export const Clock: React.FunctionComponent<IClockProps> = (props) => {
    const {
        className,
        date,
        hourCursorStyles,
        secondCursorStyles,
        styles,
        minuteCursorStyles,
        onChange,
        onRenderDial,
        onRenderCursor,
        onRenderHourCursor,
        onRenderMinuteCursor,
        onRenderSecondCursor,
    } = props;

    const [seconds, setSeconds] = React.useState<number>(date?.getSeconds() || 0);
    const [minutes, setMinutes] = React.useState<number>(date?.getMinutes() || 0);
    const [hours, setHours] = React.useState<number>(date?.getHours() || 0);

    React.useEffect(() => {
        const id: NodeJS.Timeout = setTimeout(() => {
            const newSeconds: number = seconds + 1;
            const newMinutes: number = minutes + Math.floor(newSeconds / 60);
            const newHours: number = hours + Math.floor(newMinutes / 60);
            const newDate: Date = new Date(date?.getFullYear() || 0, date?.getMonth() || 0, date?.getDay() || 0, newHours, newMinutes, newSeconds);
            if (onChange) {
                onChange(newDate);
            }
            setSeconds(newSeconds % 60);
            setMinutes(newMinutes % 60);
            setHours(newHours % 12);
        }, 1000);
        return () => {
            clearTimeout(id);
        };
    }, [date, hours, minutes, onChange, seconds]);

    return <div className={`clock-root ${className || styles?.root || ""}`}>
        <ClockDial
            styles={styles}
            onRenderScale={onRenderDial}
        />
        <ClockCursor
            angle={seconds * SECOND_TO_ANGLE}
            size={ClockCursorSize.Large}
            styles={secondCursorStyles || styles?.cursor}
            onRenderCursor={onRenderHourCursor || onRenderCursor}
        />
        <ClockCursor
            angle={minutes * MINUTE_TO_ANGLE}
            size={ClockCursorSize.Middle}
            styles={minuteCursorStyles || styles?.cursor}
            onRenderCursor={onRenderMinuteCursor || onRenderCursor}
        />
        <ClockCursor
            angle={hours * HOUR_TO_ANGLE}
            size={ClockCursorSize.Small}
            styles={hourCursorStyles || styles?.cursor}
            onRenderCursor={onRenderSecondCursor || onRenderCursor}
        />
    </div>;
};
