import { sendCode } from "@/utils/http";
import { Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingPage = ({ provider }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let code = new URL(window.location.href).searchParams.get("code");
    console.log("code", code);
    console.log("provide", provider);
    const res = sendCode({ code, provider });
    console.log(res);
    // navigate("/");
  }, [provider]);
  return (
    <>
      <div>로딩중</div>
      <Spinner />
    </>
  );
};

export default LoadingPage;
