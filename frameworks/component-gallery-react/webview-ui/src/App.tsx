import { BadgeDemo } from "./demos/BadgeDemo";
import { ButtonDemo } from "./demos/ButtonDemo";
import { CheckboxDemo } from "./demos/CheckboxDemo";
import { DataGridDemo } from "./demos/DataGridDemo";
import { DividerDemo } from "./demos/DividerDemo";
import { DropdownDemo } from "./demos/DropdownDemo";
import { LinkDemo } from "./demos/LinkDemo";
import { PanelsDemo } from "./demos/PanelsDemo";
import { ProgressRingDemo } from "./demos/ProgressRingDemo";
import { RadioGroupDemo } from "./demos/RadioGroupDemo";
import { TagDemo } from "./demos/TagDemo";
import { TextAreaDemo } from "./demos/TextAreaDemo";
import { TextFieldDemo } from "./demos/TextFieldDemo";
import "./App.css";
import "./codicon.css";

function App() {
  return (
    <main>
      <h1>Webview UI Toolkit React Component Gallery</h1>
      <section className="component-row">
        <BadgeDemo></BadgeDemo>
        <ButtonDemo></ButtonDemo>
        <CheckboxDemo></CheckboxDemo>
      </section>
      <section id="data-grid-row">
        <DataGridDemo></DataGridDemo>
      </section>
      <section className="component-row">
        <DividerDemo></DividerDemo>
        <DropdownDemo></DropdownDemo>
        <LinkDemo></LinkDemo>
      </section>
      <section id="panels-row">
        <PanelsDemo></PanelsDemo>
      </section>
      <section className="component-row">
        <ProgressRingDemo></ProgressRingDemo>
        <RadioGroupDemo></RadioGroupDemo>
        <TagDemo></TagDemo>
      </section>
      <section className="component-row">
        <TextAreaDemo></TextAreaDemo>
        <TextFieldDemo></TextFieldDemo>
      </section>
    </main>
  );
}

export default App;
