declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module "*.gif" {
  const src: string;
  export default src;
}

// Support for importing JS/JSX files in TypeScript
declare module "*.jsx" {
  import * as React from 'react';
  const component: React.ComponentType<any>;
  export default component;
}