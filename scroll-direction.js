var uniq = require('lodash.uniq');
var throttle = require('lodash.throttle');

var UP = 'UP';
var DOWN = 'DOWN';

var DEFAULTS = {
  series: 5,
  throttle: 100
};

function getScrollPos () {
  return (document.body.getBoundingClientRect()).top;
}

function ScrollDirection (cb,options) {
  var obj = {};
  var series = [];
  var options = options || DEFAULTS;
  var scrollPos = getScrollPos();

  function lastAction () {
    var result = DOWN;

    var newScrollPos = getScrollPos();

    if (newScrollPos > scrollPos) {
      result = UP;
    }

    scrollPos = newScrollPos;

    return result;
  };

  obj.seriesClean = function () {
    if (series.length >= options.series) {
      series = series.slice(Math.max(series.length - options.series));
    }
  };

  obj.seriesUniq = function () {
    if ( uniq(obj.series).length <= 1 ) {
      return obj.series[0];
    }
    return false;
  };

  obj.listener = throttle(function () {
    series.push(lastEventType());
    seriesClean();
    var ud = obj.seriesUniq();
    if (ud) {
      cb(ud);
    }
  },options.throttle);

  window.addEventListener('scroll',obj.listener);

  obj.destroy = function () {
    window.removeEventListener('scroll',obj.listener);
  };

  return obj;
}

module.exports = ScrollDirection;
