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

// Works with TypeScript 3.9.1-rc but not 3.9.0-beta
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "module-custom-element": ModuleCEAttributes;
    }
  }
}
