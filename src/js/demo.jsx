import React from "react";
import List from "./components/List/List.jsx";
import ClickButton from "./components/ClickButton/ClickButton.jsx";

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
	        <ClickButton/>
        </div>
        );
    }
}

export default DemoProjects;
