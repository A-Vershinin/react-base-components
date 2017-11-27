import React from "react";
import List from "./components/List/List";
import ClickButton from "./components/ClickButton/ClickButton";
import UserForm from "./components/UserForm/UserForm";
import SignUpDialog from "./components/SignUpDialog/SignUpDialog";
import RefsExample from "./components/RefsExample/RefsExample";
import Clock from "./components/Clock/Clock";
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable";
import Todo from "./components/Todo/Todo.jsx";

import todos from "./components/Todo/todo.js";

const propsValues = {
  title: "Список смартфонов",
  items: [
    "HTC U Ultra",
    "iPhone 7",
    "Google Pixel",
    "Hawei P9",
    "Meizu Pro 6",
    "Asus Zenfone 3",
  ],
};

class DemoProjects extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div>
        <List data={propsValues} />
        {/* <ClickButton /> */}
        {/* <UserForm /> */}
        {/* <SignUpDialog /> */}
        {/* <RefsExample /> */}
        {/* <Clock /> */}
        {/* <FilterableProductTable /> */}
        <Todo initialData={todos} />
      </div>
    );
  }
}

export default DemoProjects;
