import { ChangeEvent, useState } from "react";
import Search from "./components/Search";

function App() {
  const [inputVal, setInputVal] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };
  return (
    <>
      <Search onChange={handleInputChange} value={inputVal} />
      
    </>
  );
}

export default App;
