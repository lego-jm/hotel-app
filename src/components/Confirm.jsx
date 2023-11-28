import { confirmAlert } from "react-confirm-alert";
import Button from "./ui/Button";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function confirm(text, event) {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className="bg-white p-10 shadow-lg flex flex-col gap-3 rounded-xl w-full">
          <h1 className="text-xl">알림</h1>
          <p className="text-md">{text}</p>
          <div className="flex gap-3">
            <Button
              text="확인"
              type="button"
              event={() => {
                event();
                onClose();
              }}
            />
            <Button text="취소" type="button" event={onClose} />
          </div>
        </div>
      );
    },
  });
}
