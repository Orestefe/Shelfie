import React from "react";

const BookItem = props => {
	return (
		<tr className="book__item">
			<td>{props.book.title}</td>
			<td>{props.book.author}</td>
			<td>{props.book.pages}</td>
			<td>{props.book.readStatus}</td>
			<td>
				<button
					onClick={() => props.toggleEdit()}
					className="ui mini icon button btn--edit">
					<i className="pencil alternate icon"></i>
				</button>
				<button
					onClick={() => props.deleteBook(props.book.id)}
					className="ui mini icon button btn--delete">
					<i className="trash alternate icon"></i>
				</button>
			</td>
		</tr>
	);
};

export default BookItem;
