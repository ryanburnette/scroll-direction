# Scroll Direction

[![npm version](https://badge.fury.io/js/%40ryanburnette%2Fscroll-direction.svg)](https://badge.fury.io/js/%40ryanburnette%2Fscroll-direction)

This library is my approach to gracefully detecting vertical scroll direction
in a browser. It works by keeping track of a series of throttled detect events,
then invoking a callback with a direction argument once the series contains
only one event direction.

## Usage

```javascript
var s = new ScrollDirection(function (dir) {
  console.log(dir)
})
```

### Options

There are two options, series and throttle. Tweak the options to get the
desired behavior.

```javascript
var options = {
  series: 5,
  throttle: 100
}
new ScrollDirection(callback,options)
```

### Destroy

```javascript
s.destroy()
```

## Installation

As a library consumed and packaged by something like Webpack or Rollup.

```
npm install @ryanburnette/scroll-direction
```

```javascript
var ScrollDirection = require('@ryanburnette/scroll-direction')
```

From a CDN.

```
<script src="https://unpkg.com/@ryanburnette/scroll-direction@1.0.4/dist/scroll-direction.min.js" type="text/javascript"></script>
```
