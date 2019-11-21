import React from "react";
import BookItem from "./BookItem";
import BookInput from "./BookInput";

const BookList = ({ books }) => {
	const renderedList = books.map(book => {
		return <BookItem key={book.id} book={book}></BookItem>;
	});

	let content = (
		<div className="empty-library">
			<h2>Your library is empty</h2>
			<div>
				<i className="book icon huge blue"></i>
			</div>

			<p>
				{" "}
				Click on the <span className="text--green"> NEW BOOK</span> button above
				to fill its empty shelves{" "}
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

	return <div className="books__container">{content}</div>;
};

export default BookList;
