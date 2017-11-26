import React from "react";
import List from "./components/List/List.jsx";
import ClickButton from "./components/ClickButton/ClickButton.jsx";
import UserForm from "./components/UserForm/UserForm.jsx";
import SignUpDialog from "./components/SignUpDialog/SignUpDialog.jsx";
import RefsExample from "./components/RefsExample/RefsExample.jsx";
import Clock from "./components/Clock/Clock.jsx";
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable.jsx";
import Todo from "./components/Todo/Todo.jsx";

const propsValues = {
	title: "Список смартфонов",
	items: [
		"HTC U Ultra",
		"iPhone 7",
		"Google Pixel",
		"Hawei P9",
		"Meizu Pro 6",
		"Asus Zenfone 3"
	]
};

class DemoProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
      return (
        <div>
          <List data={propsValues}/>
	        {/*<ClickButton/>*/}
	        {/*<UserForm/>*/}
	        {/*<SignUpDialog/>*/}
	        {/*<RefsExample/>*/}
	        {/*<Clock/>*/}
	        {/*<FilterableProductTable/>*/}
	        <Todo/>
        </div>
        );
    }
}

export default DemoProjects;
