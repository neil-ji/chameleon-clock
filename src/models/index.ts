export type IRenderFunc<A = unknown, B = unknown, C = unknown> = (a?: A, b?: B, c?: C) => React.ReactNode;

export interface IClockDialStyles {
    root?: string;
}

export interface IClockCursorStyles {
    root?: string;
    cursor?: string;
}

export interface IClockStyles {
    root?: string;
    dial?: IClockDialStyles;
    cursor?: IClockCursorStyles;
}