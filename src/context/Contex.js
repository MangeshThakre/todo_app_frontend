import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const TodoContext = createContext();

const Context = ({ children }) => {
  const [todoData, setTodoData] = useState([]);
  const [deletePopUp, setDeletePopUp] = useState({
    display: false,
    todoId: "",
    taskId: "",
    type: "",
  });

  const notify = (message, type) => {
    return toast[type](message, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <TodoContext.Provider
      value={{ todoData, setTodoData, deletePopUp, setDeletePopUp, notify }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default Context;
