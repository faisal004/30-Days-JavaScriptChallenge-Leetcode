var cancellable = function(fn, args, t) {
  var timeoutId = setTimeout(function() {
    fn(...args);
  }, t);

  return function() {
    clearTimeout(timeoutId);
  };
};