import { Button } from "../ui/button";

const StartWithGoogleButton = () => {
  return (
    <Button aschild variant="ghost">
      <div className="flex bg-[#F2F2F2] items-center justify-center gap-2 rounded-md w-full">
        <img
          src="SignGoogle.png"
          alt="sign up with google"
          className="mx-auto"
        />
      </div>
    </Button>
  );
};

export default StartWithGoogleButton;
