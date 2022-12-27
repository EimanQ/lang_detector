import style from "./App.module.css"
import { useState } from "react";
import { request } from "./hooks/http.hook"
import { Button } from './components/Button/Button';
import { LanguageLibrary } from "./context/LanguageLibrary";

function App() {
  const [textToDetect, setTextToDetect] = useState(``);
  const [detectedLanguage, setDetectedLanguage] = useState(``);

  const handleDetect = async (): Promise<void> => {
    try {
      if (!textToDetect.length) throw new Error('The language detector cannot detect the language of an empty input');
      if (/^\d+$/.test(textToDetect)) throw new Error(`The language detector cannot detect the language from the input, which includes only digits`)
      const response = await request('http://localhost:3333/detector/d', 'PATCH', { textDetect: textToDetect });
      if (!response.length) throw new Error(`Something go wrong`)
      const languageName: any = LanguageLibrary.filter((el: any) => el.code === response[0].language)
      setDetectedLanguage(languageName[0].name)
    } catch (error: any) {
      alert(error.message)
    }
  }

  return (
    <>
      <p className={style["title"]}>Language Detector</p>
      <p className={style["result"]}>{detectedLanguage ? detectedLanguage : null}</p>
      <div className={style["wrapper"]}>
        <input className={style["input"]} placeholder="Write your text" onChange={(e) => setTextToDetect(e.target.value)} />
        <div onClick={handleDetect}>
          <Button />
        </div>
      </div>
    </>
  );
}

export default App;
