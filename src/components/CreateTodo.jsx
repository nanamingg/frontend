import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../redux/appThunk";
import { setNewTodo } from "../redux/appSlice";

const CreateTodo = () => {
  const { newTodo } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  const onSubmitCreateTodo = (e) => {
    e.preventDefault();

    if (!newTodo) return;

    dispatch(createTodo({ title: newTodo }));

    dispatch(setNewTodo(""));
  };

  return (
    <form className="flex" onSubmit={onSubmitCreateTodo}>
      <input
        className="px-5 py-2 text-2xl focus:outline-none border-2 focus:border-cyan-400"
        type="text"
        value={newTodo}
        onChange={(e) => dispatch(setNewTodo(e.target.value))}
      />
      <input
        className="ml-4 px-4 py-3 bg-cyan-400 hover:bg-cyan-500 active:bg-cyan-400 rounded-lg"
        type="submit"
        value="생성"
      />
    </form>
  );
};

export default CreateTodo;
