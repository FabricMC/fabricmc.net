/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module "*.eta" {
  const template: import("eta/dist/types/compile").TemplateFunction;
  export default template;
}
