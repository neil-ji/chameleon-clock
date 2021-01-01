# chameleon-clock

[![npm version](https://img.shields.io/npm/v/chameleon-clock)](https://www.npmjs.com/package/chameleon-clock)
![total code lines](https://img.shields.io/tokei/lines/github/neil-ji/chameleon-clock)
![npm minified size](https://img.shields.io/bundlephobia/min/chameleon-clock)
![github repository size](https://img.shields.io/github/repo-size/neil-ji/chameleon-clock)

![](https://ftp.bmp.ovh/imgs/2020/12/ea20994f740d1f43.png)

An efficient clock component build by react, and supports extend its dial and pointer, you can create a clock component in `any shape/style` with code just several lines.

## Installation

```
npm i chameleon-clock
```
## Use

It already expose a built-in typing definition for `typescript`, no need to install from npm `@types`.

```ts
import { Clock } from "chameleon-clock";

export interface IMyComponentProps {

    // ... Your props definition
    
}

const MyComponent: React.FunctionComponent<IMyComponentProps> = (props) => {

    const [date, setDate] = React.useState<Date>(new Date());
    
    return <Clock date={new Date()} onChange={setDate} />;
    
}
```

It is simple too in `javascript`.

```js
const { Clock } = require("chameleon-clock");

const MyComponent = (props) => {

    const [date, setDate] = React.useState(new Date());
    
    return <Clock date={ new Date() } onChange = { setDate } />;
    
}
```

It is recommended to use `typescript`, and all of the following code examples will write by `typescript`( Why not have a try? :D ).

## Custom Styles

Change clock's style by passing an object maked up by `className` to it.

```ts
const MyComponent: React.FunctionComponent<IMyComponentProps> = (props) => {

    return <Clock

        styles={{

            root: "my-style-clock-root",

            cursor: "my-style-clock-cursor",

            dial: "my-style-clock-dial"

        }}

        // ... Other props

    />;

}
```

`styles.cursor` is a `className` of every cursor by default, if you assign `styles.hour`/ `styles.minute`/ `styles.second` a `className`, hour/min/sec cursor's style will been rewrited. 

```ts
const MyComponent: React.FunctionComponent<IMyComponentProps> = (props) => {

    return <Clock

        styles={{

            root: "my-style-clock-root",
            
            // Style of hour-cursor will been decide on className `my-style-clock-cursor-hour`
            hour: "my-style-clock-cursor-hour",
            
            // Style of other-cursors will been decide on className `my-style-clock-cursor`
            cursor: "my-style-clock-cursor",

            dial: "my-style-clock-dial",
            
        }}

        // ... Other props

    />;

}
```

Tips with `FunctionComponent`, use `React.useMemo` to cache the styles object will reduce render time. 

```ts
const MyComponent: React.FunctionComponent<IMyComponentProps> = (props) => {

    const styles: IClockStyles = React.useMemo(() => {

        return {

            // ...

        };

    });

    return <Clock

        styles={styles}

        // ... Other props

    />;

}
```

## Custom Renderer

If `custom styles` cannot satisfy your demand, make a trial of `custom renderer`, it allows you to rewrite clock-dial and clock-cursor component, see the details at [API](https://github.com/neil-ji/chameleon-clock/edit/master/README.md#API).

## API

### Props

If provided, additional class name to provide on the root element.
```ts
className ?: string;
```

If provided, component will adjust cursor position as specified date.
```ts
date ?: Date;
```

Custom styling for individual elements within the Clock DOM.
```ts
styles ?: IClockStyles;
```

Callback for when the date changes.
```ts
onChange ?: (newDate: Date) => void;
```

Custom renderer for the clock-dial.
```ts
onRenderDial ?: IRenderFunc;
```

Custom renderer for the all clock-cursors.
```ts
onRenderCursor ?: IRenderFunc;
```

Custom renderer for the hour-cursor.
```ts
onRenderHourCursor ?: IRenderFunc;
```

Custom renderer for the minute-cursor.
```ts
onRenderMinuteCursor ?: IRenderFunc;
```

Custom renderer for the second-cursor.
```ts
onRenderSecondCursor ?: IRenderFunc;
```

### Typing

```ts
type IRenderFunc<A = unknown, B = unknown, C = unknown> = (a?: A, b?: B, c?: C) => React.ReactNode;
```

```ts
interface IClockStyles {
    root?: string;
    dial?: string;
    cursor?: string;
    hour?: string;
    minute?: string;
    second?: string;
}
```

```ts
enum ClockCursorSize {
    Small = 0,
    Middle = 1,
    Large = 2
}
```

