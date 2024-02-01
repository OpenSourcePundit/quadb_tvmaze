import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <img
          src="https://media.licdn.com/dms/image/C4D0BAQHKVMFH-niXIg/company-logo_200_200/0/1637757773341?e=1714608000&v=beta&t=G9KV1JI4w2pjysg8Hs6YuPwiH3C7ouIQo2xagqeH_lc"
          alt="Logo"
          width="70"
          height="70"
          className="d-inline-block align-text-top cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        ></img>
        <h3 className="cursor-pointer" onClick={() => {
            navigate("/");
          }}>QuadB-Tech</h3>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn btn-outline-success cursor-pointer"
        >
          Home
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
