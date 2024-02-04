import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <Button className="bg-primary-gradient text-xl font-semibold">
          Add todo
        </Button>
        <button>todo filter</button>
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
