import React, { Component } from "react";

class EditInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			author: "",
			pages: "",
			readStatus: "",
		};
	}
	componentDidMount() {
		this.refs.title.focus();
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			title: nextProps.title,
			author: nextProps.author,
			pages: nextProps.pages,
			readStatus: nextProps.readStatus,
		});
	}
	handleSubmit = e => {
		e.preventDefault();
	};

	editBook(){
		
	}

	render() {
		return (
			<div className="modal">
				<div className="modal-content">
					<span onClick={this.props.toggleEdit} className="close">
						&times;
					</span>
					<header className="text-center">
						<h2>Enter Book Information</h2>
					</header>
					<form onSubmit={this.handleSubmit} className="ui form flex-form">
						<div className="field">
							<label>Title</label>
							<input
								value={this.state.title}
								placeholder="Enter the title"
								type="text"
								ref="title"
							/>
						</div>
						<div className="field">
							<label>Author</label>
							<input
								value={this.state.author}
								placeholder="Enter the author's name"
								type="text"
								ref="author"
							/>
						</div>

						<div className="field">
							<label>Pages</label>
							<input
								value={this.state.pages}
								placeholder="Enter the number of pages"
								type="number"
								ref="pages"
							/>
						</div>
						<div className="field">
							<label>Reading Status</label>
							<select name="readStatus" ref="readStatus">
								<option defaultValue=""></option>
								<option value="Want to Read">Want to Read</option>
								<option value="Currently Reading">Currently Reading</option>
								<option value="Finished Reading">Finished Reading</option>
							</select>
						</div>

						<div className="field">
							<button
								type="submit"
								className="ui button button-center btn--add">
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default EditInput;
