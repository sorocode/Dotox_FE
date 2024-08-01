import { useLoginStore } from "@/store/store";
import { AccountCircle } from "@mui/icons-material";

import { Link } from "react-router-dom";
const Header = () => {
  const { isLogin, name } = useLoginStore();
  let content = isLogin ? (
    <Link to="/profile" className="flex items-center">
      <span className="text-lg underline">{name}</span>님 환영합니다.
    </Link>
  ) : (
    <Link to="/login" className="flex items-center">
      <div className="font-medium underline">로그인</div>
    </Link>
  );

  return (
    <div className="flex justify-between items-center bg-deepGreen px-6 py-2">
      <Link to="/" className="flex items-center ">
        <img src="mainLogo.png" alt="logo" width={50} />
        {/* <span className="text-white text-xl font-semibold font-ShadowsIntoLight">
          Dotox
        </span> */}
      </Link>

      {content}
      {/* <AccountCircle color="action" fontSize="large" /> */}
    </div>
  );
};

export default Header;
