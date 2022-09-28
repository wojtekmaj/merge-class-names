export default function mergeClassNames(...args: any[]): string {
  return args
    .reduce((classList: any[], arg) => classList.concat(arg), [])
    .filter((arg: any) => typeof arg === 'string')
    .join(' ');
}
