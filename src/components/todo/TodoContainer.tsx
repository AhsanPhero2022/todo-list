import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient h-full w-full rounded-xl p-[5px]">
        {/* <div className="text-2xl font-bold p-5 flex justify-center items-center bg-white rounded-md">
          <p>There is no task pending</p>{" "}
        </div> */}
        <div className="w-full h-full rounded-lg space-y-3 bg-white p-5">
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
