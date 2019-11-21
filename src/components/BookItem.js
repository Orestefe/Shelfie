import React from "react";

const BookItem = ({ book }) => {
	return (
		<tr className="book__item">
			<td className="bookCell">{book.title}</td>
			<td className="bookCell">{book.author}</td>
			<td className="bookCell">{book.pages}</td>
			<td className="bookCell">{book.readStatus}</td>
			<td>
				<button className="ui mini icon button btn--edit">
				<i className="pencil alternate icon"></i>
				</button>
				<button className="ui mini icon button btn--delete">
					<i className="trash alternate icon"></i>
				</button>
			</td>
		</tr>
	);
};

export default BookItem;
