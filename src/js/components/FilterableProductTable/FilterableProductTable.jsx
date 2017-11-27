import React from "react";
import ProductTable from "./ProductTable/ProductTable.jsx";
import SearchBar from "./SearchBar/SearchBar.jsx";
/*
Приложение - таблица данных для поиска товара через React.
Представьте, что у нас уже есть API в json-формате и эскиз от нашего дизайнера.
API в json-формате возвращает некоторые данные, которые выглядит следующим образом:
*/
const products = [
	{
 category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football",
},
	{
 category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball",
},
	{
 category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball",
},
	{
category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch",
},
	{
 category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5",
},
	{
category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7",
},
];

class FilterableProductTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filterText: "",
			inStockOnly: false,
		};
		this.handleUserInput = this.handleUserInput.bind(this);
	}

	handleUserInput(filterText, inStockOnly) {
		this.setState({
			filterText,
			inStockOnly,
		});
	}

	render() {
		return (
  <div style={{ borderBottom: "1px solid black", marginBottom: "20px" }}>
    <h3>Приложение - таблица для поиска товара.</h3>
    <SearchBar
      filterText={this.state.filterText}
      inStockOnly={this.state.inStockOnly}
      onUserInput={this.handleUserInput}
    />
    <ProductTable
      products={products}
      filterText={this.state.filterText}
      inStockOnly={this.state.inStockOnly}
      onUserInput={this.handleUserInput}
    />
  </div>
		);
	}
}

export default FilterableProductTable;
