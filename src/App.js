import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import QuizDetaul from "./Pages/QuizDetail";
import QuizResult from "./Pages/QuizResult";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Layout>
        <Routes>
          <Route path=""  element={<Navigate replace to="/home" />}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/categories/:catId" element={<QuizDetaul/>}></Route>
          <Route path="/quiz/results" element={<QuizResult/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </Layout>
      </Provider>
    </div>
  );
}

export default App;
