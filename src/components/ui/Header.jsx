import { AccountCircle } from "@mui/icons-material";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between items-center bg-mintGreen px-6 py-2">
      <Link to="/" className="flex items-center ">
        <img src="mainLogo.png" alt="logo" width={50} />
        {/* <span className="text-white text-xl font-semibold font-ShadowsIntoLight">
          Dotox
        </span> */}
      </Link>

      <Link to="/login">
        <AccountCircle color="action" fontSize="large" />
      </Link>
    </div>
  );
};

export default Header;
