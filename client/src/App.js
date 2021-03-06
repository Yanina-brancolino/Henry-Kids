import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import FormularioClase from "./components/FormularioClase/FormularioClase.jsx";
import Home from "./components/Home/home";
import HomeTeacher from "./components/HomeTeacher/HomeTeacher";
import ClassDetail from "./components/ClassDetail/ClassDetail";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
// import { auth } from "../src/firebase/firebaseConfig";
import ProfileStudent from "./components/ProfileStudent/ProfileStudent";
import ProfileTeacher from "./components/ProfileTeacher/ProfileTeacher";
import ModifyClass from "./components/ModifyClass/ModifyClass";
import RegisterTeacher from "./components/RegisterTeacher/RegisterTeacher";
import FavsContainer from "./components/FavsContainer/FavsContainer";


const studentRoutes = [
  { path: "/home/student", element: <Home /> },
  { path: "/home/student/:id", element: <ClassDetail /> },
  { path: "/*", element: <Home /> },
  { path: "/home/student/profile", element: <ProfileStudent />},
  { path: "/home/student/register-teacher", element: <RegisterTeacher /> },
  { path: "/home/student/fav", element: <FavsContainer /> },
];
const teacherRoutes = [
  { path: "/home/teacher", element: <HomeTeacher /> },
  { path: "home/create-clase", element: <FormularioClase /> },
  { path: "/home/teacher/profile", element: <ProfileTeacher />},
  { path: "home/modify/:id", element: <ModifyClass /> },
  { path: "/*", element: <HomeTeacher /> }
];

const { type } = localStorage;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {
          type === "student"
            ? studentRoutes.map((e) => {
                return <Route path={e.path} element={e.element} />;
              })
            : type === "teacher" 
            ? teacherRoutes.map((e) => {
                return <Route path={e.path} element={e.element} />;
              })
            : <Route path="/*" element={<LandingPage />} />
              }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
