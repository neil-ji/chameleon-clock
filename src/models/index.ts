export type IRenderFunc<A = unknown, B = unknown, C = unknown> = (a?: A, b?: B, c?: C) => React.ReactNode;

export interface IClockStyles {
    root?: string;
    dial?: string;
    cursor?: string;
    hour?: string;
    minute?: string;
    second?: string;
}