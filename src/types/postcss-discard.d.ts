declare module 'postcss-discard' {
  import { Plugin } from 'postcss';
  const discard: (options?: any) => Plugin;
  export default discard;
}
