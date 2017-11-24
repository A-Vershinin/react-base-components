import React from 'react';

class Item extends React.Component {
	render() {
		return <li>{this.props.name}</li>;
	}
}

class SearchPlugin extends React.Component{
	constructor(props){
		super(props);
		this.onTextChanged = this.onTextChanged.bind(this);
	}

	onTextChanged(e){
		const text = e.target.value.trim();   // удаляем пробелы
		this.props.filter(text); // передаем введенный текст в родительский компонент
	}

	render() {
		return <input placeholder="Поиск" onChange={this.onTextChanged} />;
	}
}

class List extends React.Component {
	constructor(props){
		super(props);
		this.state = { items: this.props.data.items};
		this.filterList = this.filterList.bind(this);
	}

	filterList(text) {
		const filteredList = this.props.data.items.filter(function(item){
			return item.toLowerCase().search(text.toLowerCase()) !== -1;
		});
		this.setState({items: filteredList});
	}

	render() {
		return(
			<div style={{marginBottom: "20px", borderBottom: "1px solid black"}}>
				<h2>{this.props.data.title}</h2>
				<div>Поиск по товарам</div>
				<SearchPlugin filter={this.filterList} />
				<ul>
					{
						this.state.items.map(function(item){
							return <Item key={item} name={item} />
						})
					}
				</ul>
			</div>);
	}
}

export default List;

