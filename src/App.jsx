  import { CORE_CONCEPTS } from "./data"
  import Header from "./Components/Header/Header.jsx"
  import CoreConcept from "./Components/CoreConcept"
  import TabButton from "./Components/TabButton.jsx";
  import { useState } from "react";
  import { EXAMPLES } from "./data";
  
  function App() {
    const [selectedTopic , setSelectedTopic] = useState();

  function handleSelect(selectedbutton){
    // selected button will be ny of the four button we can dynmically create content on it
   console.log(selectedbutton)
   setSelectedTopic(selectedbutton)
  }

  let tabContent = <p>Please Select Topic</p>

  if (selectedTopic){
    tabContent = <><h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}

            </code>
          </pre>
          </>
}
  
  return (
    <div>
     <Header/>
      <main>
        <section id ="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          {CORE_CONCEPTS.map((item) => <CoreConcept key = {item.title} {...item}/>)   }
       
       </ul>
       </section>
       <section id ="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected = {selectedTopic==="components"} onSelect={() => handleSelect('components')}>Components</TabButton>
          <TabButton isSelected = {selectedTopic==="jsx"} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected = {selectedTopic==="props"} onSelect={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected = {selectedTopic==="state"}  onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
        <div id = "tab-content">{tabContent}</div>
       

       </section>
      </main>
    </div>
  );
};

export default App;
