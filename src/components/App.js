import React from "react";
import BookInput from "./BookInput";
import BookList from "./BookList";
import SVG from "./SVG";
import "./App.css";

class App extends React.Component {
	state = {
		library: [
			{ title: "", author: "", pages: "0", readStatus: false },
			{ title: "Harry Potter", author: "JK Rowling", pages: "450", readStatus: true },
		],
		input_active: false,
	};

	addBook = () => {};

	render() {
		return (
			<div>
				<header className="logo">
					<span>
						<SVG></SVG>
					</span>
					<h1 className="logo--text">Shelfie</h1>
				</header>
				<div className="library__container">
					<div className="library__header">
						<h2>Manage Library</h2>
						<button
							onClick={this.addBook}
							className="ui icon button btn-new-book">
							<i class="plus square icon btn-new-book"></i>
							Add Book
						</button>
					</div>
					<BookList
						books={this.state.library}
						status={this.state.input_active}></BookList>
				</div>
			</div>
		);
	}
}
//books={this.state.library}
export default App;
