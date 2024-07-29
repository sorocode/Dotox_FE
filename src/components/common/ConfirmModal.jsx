import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";

import { DialogClose } from "@radix-ui/react-dialog";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "@/store/store";
import CustomButton from "../ui/CustomButton";

const ConfirmModal = ({ trigger, message }) => {
  const navigate = useNavigate();
  const { setLogout } = useLoginStore();

  const onSubmitHandler = () => {
    setLogout();
    navigate("/");
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{trigger}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{message}</DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <CustomButton filled={true} onClick={onSubmitHandler}>
            확인
          </CustomButton>
        </DialogFooter>
        <DialogClose asChild>
          <CustomButton filled={false}>닫기</CustomButton>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmModal;