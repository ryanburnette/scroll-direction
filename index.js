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
    obj.series = arr.slice(Math.max(arr.length - obj.options.series));
  };

  obj.seriesUniq = function () {
    if ( uniq(obj.series).length <= 1 ) {
      return obj.series[0];
    }
    return false;
  };

  obj.listener = window.addEventListener('scroll', function () {
    series.push(obj.handler());
    obj.seriesClean();
    var ud = obj.seriesUniq();
    if (ud) {
      cb(ud);
    }
  });

  return obj;
}

module.exports = ScrollDirection;
