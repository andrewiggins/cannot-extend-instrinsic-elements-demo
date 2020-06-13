import { createElement } from "preact";

export function App() {
  return (
    <div>
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
