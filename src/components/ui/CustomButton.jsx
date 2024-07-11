import { Button } from "./button";

const CustomButton = ({ fontSize, filled, children, ...props }) => {
  const sizeClass =
    fontSize === "large"
      ? "py-3 px-6 text-lg"
      : fontSize === "small"
      ? "py-1 px-3 text-sm"
      : "py-2 px-4 text-base";

  // Define filled-based classes with main color
  const filledClass = filled
    ? "bg-mintGreen border-transparent text-white hover:bg-mintGreen"
    : "bg-transparent border-mintGreen border-2 text-mintGreen hover:bg-white";

  // Combine classes
  const cssClass = `flex justify-center items-center border-[1px] w-full my-2 ${sizeClass} ${filledClass} rounded-lg hover:opacity-80 `;

  return (
    <Button className={cssClass} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
