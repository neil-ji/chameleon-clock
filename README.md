# chameleon-clock

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

Change clock's style by passing an object maked up by `className` to it, for example.

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

## Custom Render

`chameleon-clock` support custom render, you just need to offer a render function, by simpler words, just change several css attributes like under examples.

## API

