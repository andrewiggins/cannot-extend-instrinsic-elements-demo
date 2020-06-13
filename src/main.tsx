import { createElement } from "preact";

export function main() {
  const x: SomeCustomInterfaceToDetermineWhetherThisFileIsBeingIncluded = {};

  return (
    <div>
      <global-custom-element attr={5} attr2={x} />
      <module-custom-element
        ceProp="ceProp"
        dir="auto" // Inherited prop from HTMLAttributes
        onsomeevent={function (e) {
          console.log(e.eventProp, this.instanceProp);
        }}
      />
    </div>
  );
}

main();
