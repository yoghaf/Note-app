import propTypes from "prop-types";
import * as Toast from "@radix-ui/react-toast";
function ToastNotif({ success, message, open, setOpen, children }) {
  return (
    <Toast.Provider swipeDirection="right">
      {children}
      <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
        <Toast.Title className="ToastTitle">{success}</Toast.Title>
        <Toast.Description asChild>
          <p className="ToastDescription">{message}</p>
        </Toast.Description>
        <Toast.Action className="ToastAction" asChild altText="Goto schedule to undo">
          <button className="Button small green">Undo</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
}
ToastNotif.propTypes = {
  children: propTypes.node,
  text: propTypes.string,
  open: propTypes.bool,
  setOpen: propTypes.func,
  success: propTypes.string,
  message: propTypes.string,
};

export default ToastNotif;
