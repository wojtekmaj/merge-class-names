const mergeClassNames = (...args) => args.reduce(
  (classList, arg) => (
    (typeof arg === 'string' || arg instanceof Array)
      ? classList.concat(arg)
      : classList
  ),
  [],
).filter(Boolean).join(' ');

export default mergeClassNames;
