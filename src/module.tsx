export interface ModuleCE {
  instanceProp: string;
}

export interface ModuleCEEvent {
  eventProp: string;
}

export interface ModuleCEAttributes extends preact.JSX.HTMLAttributes {
  ceProp?: string;
  onsomeevent?: (this: ModuleCE, ev: ModuleCEEvent) => void;
}

// // Works with TypeScript 3.9.1-rc but not 3.9.0-beta
// declare module "preact" {
//   namespace JSX {
//     interface IntrinsicElements {
//       "module-custom-element": ModuleCEAttributes;
//     }
//   }
// }

// Works with TypeScript 3.6.5, 3.7.5, 3.8.3, 3.9.0-beta, 3.9.5
declare module "preact" {
  namespace createElement.JSX {
    interface IntrinsicElements {
      "module-custom-element": ModuleCEAttributes;
    }
  }
}
