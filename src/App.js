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
import Login from "./pages/Auth/Login";
import PrivateRoute from  "./routes/PrivateRoute";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/user-management" element={<PrivateRoute component = {UserManagement}/>} />
            <Route path="/user-management/add" element={<PrivateRoute component = {AddUser}/>} />
            <Route path="/user-management/detail/:userId" element={<PrivateRoute component = {UserDetail}/>} />
            <Route path="/user-management/edit/:userId" element= {<PrivateRoute component={AddUser}/>} />
            <Route path="/user-management/delete/:userId" element={<PrivateRoute component = {DeleteUser}/>} />
            <Route path="/faq" element={<PrivateRoute component = {Faq}/>} />
            <Route path="/contact" element={<PrivateRoute component = {Contact}/>} />
          </Route>
          <Route path ='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
     
        <ToastContainer />
    </div>
  );
};
export default App;
