import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layouts from "./MainLayout/Layouts";
import Homej from "./Pages/Homej";
import Courses from "./Pages/Courses";
import Quiz from "./Pages/Quiz";
import Progress from "./Pages/Progress";
import Profile from "./Pages/Profile";
import Logpage from "./Pages/Logpage";

function App() {
  return (
    // <Logpage />
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/"  element={<Homej User="Ankit"/>} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Progress" element={<Progress />} />
          <Route path="/Profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
