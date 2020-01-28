import React from "react";
import BookItem from "./BookItem";
import { uid } from "react-uid";

class BookList extends React.Component {
	render() {
		let renderedList = this.props.books.map(book => (
			<BookItem
				toggleEdit={this.props.toggleEdit}
				editBook={this.props.editBook}
				deleteBook={this.props.deleteBook}
				key={uid(book)}
				book={book}
			/>
		));
		let content = (
			<div className="empty-library">
				<h2>Your library is empty</h2>
				<div>
					<i className="book icon huge blue"></i>
				</div>
				<br />
				<p>
					Click on the <span className="text--green"> Add Book</span> button
					above to fill its empty shelves
				</p>
			</div>
		);
		if (renderedList.length > 0) {
			content = (
				<table className="book__table">
					<thead className="table__header">
						<tr>
							<td>Title</td>
							<td>Author</td>
							<td>Pages</td>
							<td>Read</td>
							<td>Action</td>
						</tr>
					</thead>
					<tbody className="table__body">{renderedList}</tbody>
				</table>
			);
		}
		return (
			<div className="library__container">
				<div className="library__header">
					<h2>Manage Library</h2>
					<button
						onClick={this.props.toggleInput}
						className="ui icon button btn--new-book">
						<i className="plus square icon btn--new-book"></i>
						Add Book
					</button>
				</div>
				<div className="books__container">{content}</div>
			</div>
		);
	}
}

export default BookList;
