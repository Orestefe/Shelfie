import React from "react";

class BookInput extends React.Component {
	state = { book: { title: "", author: "", pages: "", readStatus: false } };

	addB;
	render() {
		return (
			<div className="form_pop">
				<form class="book__input" action="">
					<div className="bookCell">
						<input type="text" id="title" />
					</div>
					<div className="bookCell">
						<input type="text" id="author" />
					</div>
					<div className="bookCell">
						<input type="number" id="pages" />
					</div>
					<div className="bookCell">
						<input type="checkbox" id="read" />
					</div>

					<button onClick={this.addBook} class="btn btn--add">
						ADD
					</button>
					<button class="btn btn--delete">DELETE</button>
				</form>
			</div>
		);
	}
}

export default BookInput;
