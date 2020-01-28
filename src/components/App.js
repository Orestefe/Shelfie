import React, { Component } from "react";
import BookInput from "./BookInput";
import EditInput from "./EditInput";
import BookList from "./BookList";
import SVG from "./SVG";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			library: [],
			inputActive: false,
			editActive: false,
		};
		this.addBook = this.addBook.bind(this);
		this.toggleInput = this.toggleInput.bind(this);
		this.deleteBook = this.deleteBook.bind(this);
		this.editBook = this.editBook.bind(this);
		this.toggleEdit = this.toggleEdit.bind(this);
	}

	toggleInput() {
		this.setState(prevState => ({ inputActive: !prevState.inputActive }));
	}

	toggleEdit() {
		this.setState(prevState => ({ editActive: !prevState.editActive }));
	}

	addBook(book) {
		this.setState(prevState => ({ library: prevState.library.concat(book) }));
		this.toggleInput();
	}

	deleteBook(id) {
		this.setState(prevState => ({
			library: prevState.library.filter(book => book.id !== id),
		}));
	}

	editBook() {
		this.toggleEdit();
		this.setState(prevState => ({
			editActive: (prevState.editActive = true),
		}));
	}
	render() {
		return (
			<div>
				<header className="logo">
					<span>
						<SVG></SVG>
					</span>
					<h1 className="logo--text">Shelfie</h1>
				</header>
				{this.state.inputActive ? (
					<BookInput
						editBook={this.editBook}
						addBook={this.addBook}
						toggleInput={this.toggleInput}
					/>
				) : (
					""
				)}
				{this.state.editActive ? (
					<EditInput toggleEdit={this.toggleEdit} />
				) : (
					""
				)}

				<BookList
					toggleInput={this.toggleInput}
					toggleEdit={this.toggleEdit}
					editBook={this.editBook}
					deleteBook={this.deleteBook}
					books={this.state.library}></BookList>
			</div>
		);
	}
}
export default App;
