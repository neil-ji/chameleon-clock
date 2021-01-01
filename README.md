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

## Custom Render

`chameleon-clock` support custom render, you just need to offer a render function, by simpler words, just change several css attributes like under examples.

in progress...

## API

in progress...
