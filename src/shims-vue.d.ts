declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // @typescript-eslint/no-explicit-any no-any
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
