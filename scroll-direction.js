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

  obj.UP = UP;
  obj.DOWN = DOWN;
  obj.scrollPos = getScrollPos();
  obj.series = [];
  obj.options = options || DEFAULTS;

  obj.handler = function () {
    var result = DOWN;

    var newScrollPos = getScrollPos();

    if (newScrollPos > obj.scrollPos) {
      result = UP;
    }

    obj.scrollPos = newScrollPos;

    return result;
  };

  obj.seriesClean = function () {
    if (obj.series.length >= obj.options.series) {
      obj.series = obj.series.slice(Math.max(obj.series.length - obj.options.series));
    }
  };

  obj.seriesUniq = function () {
    if ( uniq(obj.series).length <= 1 ) {
      return obj.series[0];
    }
    return false;
  };

  obj.listener = throttle(function () {
    obj.series.push(obj.handler());
    obj.seriesClean();
    var ud = obj.seriesUniq();
    if (ud) {
      cb(ud);
    }
  },obj.options.throttle);

  window.addEventListener('scroll',obj.listener);

  obj.destroy = function () {
    window.removeEventListener('scroll',obj.listener);
  };

  return obj;
}

module.exports = ScrollDirection;
