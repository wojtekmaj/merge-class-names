const mergeClassNames = (...args) => args.reduce(
  (classList, arg) => (
    (typeof arg === 'string' || arg instanceof Array) ?
      classList.concat(arg) :
      classList
  ),
  [],
).filter(className => className).join(' ');

export default mergeClassNames;
