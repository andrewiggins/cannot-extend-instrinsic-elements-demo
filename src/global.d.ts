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

// // Works with TypeScript 3.9.1-rc but not 3.9.0-beta
// declare namespace preact.JSX {
//   interface IntrinsicElements {
//     "global-custom-element": {
//       attr: number;
//       attr2: SomeCustomInterfaceToDetermineWhetherThisFileIsBeingIncluded;
//     };
//   }
// }

// Works with TypeScript 3.6.5, 3.7.5, 3.8.3, 3.9.0-beta, 3.9.5
declare namespace preact.createElement.JSX {
  interface IntrinsicElements {
    "global-custom-element": {
      attr: number;
      attr2: SomeCustomInterfaceToDetermineWhetherThisFileIsBeingIncluded;
    };
  }
}

declare interface SomeCustomInterfaceToDetermineWhetherThisFileIsBeingIncluded {}
