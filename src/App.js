import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './pages/theme/Layout';
import UserManagement from "./pages/UserManagement/UserManagement";
import AddUser from "./pages/UserManagement/AddUser";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import UserDetail from "./pages/UserManagement/UserDetail";
import EditUser from "./pages/UserManagement/EditUser";
import DeleteUser from "./pages/UserManagement/DeleteUser";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/user-management" element={<UserManagement/>} />
            <Route path="/user-management/add" element={<AddUser/>} />
            <Route path="/user-management/detail/:userId" element={<UserDetail/>} />
            <Route path="/user-management/edit/:userId" element={<EditUser/>} />
            <Route path="/user-management/delete/:userId" element={<DeleteUser/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/contact" element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
