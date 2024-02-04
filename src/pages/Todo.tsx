import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h2 className="text-3xl font-bold text-center my-12">My Todo</h2>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
