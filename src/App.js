import "./App.css";
import QuestionOne from "./components/QuestionOne";
import QuestionTwo from "./components/QuestionTwo";
import QuestionThree from "./components/QuestionThree";
import QuestionFour from "./components/QuestionFour";
import QuestionFive from "./components/QuestionFive";
import QuestionSix from "./components/QuestionSix";
import QuestionSeven from "./components/QuestionSeven";
import QuestionEight from "./components/QuestionEight";
import QuestionNine from "./components/QuestionNine";
import QuestionTen from "./components/QuestionTen";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<QuestionOne />}></Route>
        <Route exact path="/two" element={<QuestionTwo />}></Route>
        <Route exact path="/three" element={<QuestionThree />}></Route>
        <Route exact path="/four" element={<QuestionFour />}></Route>
        <Route exact path="/five" element={<QuestionFive />}></Route>
        <Route exact path="/six" element={<QuestionSix />}></Route>
        <Route exact path="/seven" element={<QuestionSeven />}></Route>
        <Route exact path="/eight" element={<QuestionEight />}></Route>
        <Route exact path="/nine" element={<QuestionNine />}></Route>
        <Route exact path="/ten" element={<QuestionTen />}></Route>
      </Routes>
    </div>
  );
}

export default App;
