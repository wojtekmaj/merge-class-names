export default function mergeClassNames(...args) {
  return args.reduce(
    (classList, arg) => (
      (typeof arg === 'string' || Array.isArray(arg))
        ? classList.concat(arg)
        : classList
    ),
    [],
  ).filter(Boolean).join(' ');
}
