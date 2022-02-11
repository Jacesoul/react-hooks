import { useEffect, useState } from "react";

export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1 ",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2 ",
  },
];

const useTabs = (initialTab, allTabs) => {
  // if (!allTabs || !Array.isArray(allTabs)) {
  //   return;
  // }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

function App() {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]);
  return (
    <div>
      <h1>Hi</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber - 1)}>{aNumber}</button>
    </div>
  );
}

export default App;
