import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import { arrayItems } from "./AIOptions";
import { useState } from "react";

function App() {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    setLoading(true);
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);
    setLoading(false);
    setResult(response.data.choices[0].text);
  };

  return (
    <div className="App App-header">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation
          doStuff={doStuff}
          setInput={setInput}
          result={result}
          loading={loading}
        />
      )}
    </div>
  );
}

export default App;
