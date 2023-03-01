import React from "react";
import LinkToMain from "../../components/LinkToMain/LinkToMain";
import PagesContent from "../../components/PagesContent/PagesContent";
import Todo from "../../components/project/Todo/Todo";

const TodoPage = () => {
  return (
    <>
      <LinkToMain />
      <PagesContent title="Todo" component={<Todo />} />
    </>
  );
};

export default TodoPage;
