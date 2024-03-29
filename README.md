# polar-day

There is a very simple and basic timeline generator using [short-night](https://github.com/FoXZilla/short-night/) as engine.

Given events data:

```ts
const events = [
    {
        date: '2017-5',
        title: 'Axis example 1',
        endDate: '2017-8',
        endText: 'The axis can avoid for each others',
    },
    {
        date: '2017-6',
        title: 'Axis example 2',
        endDate: '2017-9-1',
        endText: 'End point is 2017.9',
    },
    {
        date: '2017-9-1',
        title: 'Start of 2017.9',
    },
    {
        date: '2017-1-2',
        title: 'Near the milestone',
    },
    {
        date: '2016-12-15',
        endDate: '2017-2',
        title: 'Near the milestone',
        description: 'The date of end is 2017.2.',
    },
    {
        date: '2018-8-15',
        title: 'Close together 1',
    },
    {
        date: '2018-8-1',
        title: 'Close together 2',
    },
    {
        date: '2018-7-15',
        title: 'Close together 3',
        description: 'The event description.',
    },
    {
        date: '2018-7-1',
        title: 'Close together 4',
        description: 'The event description.',
    },
    {
        date: '2016-8-1',
        title: 'Close together 5',
        description:
            'The event description. The event description. The event description. The event description. The event description.',
    },
    {
        date: '2016-8-15',
        title: 'Close together 6',
        description:
            'The event description. The event description. The event description. The event description. The event description.',
    },
    {
        date: '2018-4-2',
        title: 'A event which title is very very very very very very very very very very long',
    },
    {
        date: '2018-3-9',
        title: '39s Day two years!',
    },
    {
        date: '2017-3-9',
        title: '39s Day one years!',
    },
    {
        date: '2016-3-9',
        title: '39s Day!',
        description:
            'In japan and chinese, the pronunciation  of 39 is very like "Thank You". ' +
            'So some people call as Giving Day.',
    },
];
```

Draws a timeline:

![](./example.png)

# install

```sh
npm install @foxzilla/polar-day
```

# Usage

In webpack:

```ts
import { draw } from '@foxzilla/polar-day';

const events = [
    // ...
];

const timeline = await draw('#app', events);
```

In static html:

```html
<div id="app"></div>
<script src="./node_modules/@foxzilla/polar-day/dist/polar-day.js"></script>
<script>
    const events = [
        // ...
    ];
    PolarDay.draw('#app', events);
</script>
```

# Develop polar-day

```sh
npm install
npm run dev
# then open example/index.html into your browser
```
