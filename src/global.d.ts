// import "preact";
//
// declare module "preact" {
//     namespace preact.JSX {
//         interface IntrinsicElements {
//             [tag: string]: any;
//         }
//     }
// }

// declare namespace JSX {
//     interface IntrinsicElements {
//         [tag: string]: any;
//     }
// }

// Works with TypeScript 3.9.1-rc but not 3.9.0-beta
declare namespace preact.JSX {
  interface IntrinsicElements {
    "global-custom-element": {
      attr: number;
      attr2: SomeCustomInterfaceToDetermineWhetherThisFileIsBeingIncluded;
    };
  }
}

declare interface SomeCustomInterfaceToDetermineWhetherThisFileIsBeingIncluded {}
