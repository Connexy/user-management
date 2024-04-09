import { useNavigate } from "react-router-dom";
import logo from  '../../assets/images/logo.png';
import { toast } from 'react-toastify';


const Header  = () => {
  const navigate = useNavigate();
  const logout = () =>{
    toast.success('Logout success', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
    localStorage.removeItem('isLogin');
    navigate('/Login');
  }
  return (
    <div className="header">
      
      <div className="vi-flex-container">
        <div style={{flexGrow: '20'}}>
        <h2><img src={logo}  alt=" "style={{width:'188px', float: "left" }} />
    </h2>
        </div>
        <div style={{flexGrow: '0.5'}}>
          <button 
            type="button"
            onClick={logout}
            className="btn btn-danger"
            >Logout</button>
        </div>
      </div>
    </div>
  );
};
export default Header;