# Scroll Direction

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

## Options

There are two options, series and throttle. Tweak the options to get the
desired behavior.

```javascript
var options = {
  series: 5,
  throttle: 100
}
new ScrollDirection(callback,options)
```

## Destroy

```javascript
s.destroy()
```
