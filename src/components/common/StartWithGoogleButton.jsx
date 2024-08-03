import { Button } from "../ui/button";

const StartWithGoogleButton = ({ ...props }) => {
  return (
    <Button variant="ghost" {...props}>
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
