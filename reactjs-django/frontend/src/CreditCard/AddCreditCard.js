import React, { Component } from 'react';
import './AddCreditCard.css';

class AddCreditCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errFields: [],
			'card-name': '',
			'card-balance': '',
			'card-credit-limit': '',
			'card-due-date': '',
			'card-apr': '',
			'card-annual-fee': '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	throwError() {

	}

	isEmpty(name, value) {
		let curErrFields = this.state.errFields;

		if (value.length) {
			let arrIndex = curErrFields.indexOf(name);
			curErrFields.splice(arrIndex, 1);
		}
		else {
			if ( curErrFields.indexOf(name) === -1 ) {
				curErrFields.push(name);
			}
		}

		this.setState({
			errFields: curErrFields
		});
	}

	validateField(name, value) {
		switch (name) {
			case 'card-name':
				this.isEmpty(name, value);
				break;
			case 'card-balance':
				this.isEmpty(name, value);
				break;
			case 'card-credit-limit':
				this.isEmpty(name, value);
				break;
			case 'card-due-date':
				this.isEmpty(name, value);
				break;
			case 'card-apr':
				this.isEmpty(name, value);
				break;
			case 'card-annual-fee':
				this.isEmpty(name, value);
				break;
			default:
				break;
		}
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleFocus(event) {
		console.log('focus');
		let curErrFields = this.state.errFields;
		let arrIndex = curErrFields.indexOf(event.target.name);

		// // if ( this.state.errFields.indexOf( event.name !== -1 ) {
		if ( curErrFields.length && arrIndex > -1 ) {
			curErrFields.splice(arrIndex, 1);

			this.setState({ curErrFields });
			// curErrFields.splice(arrIndex, 1);
		}

		console.log(curErrFields);

		// this.setState(curFormState); // re-render

		// const formValues = this.state;
		// // const validateFcn = this.validateField;

		// // can't access super, this refers to object

		// Object.keys(this.state).map((key) => (
		// 	this.validateField(key, formValues[key])
		// ))

		// this.setState(formValues); // re-render to fire validation

		// console.log(this.state);
	}

	handleSubmit(event) {
		const formValues = this.state;
		console.log(formValues);
		// const validateFcn = this.validateField;

		// can't access super, this refers to object
		// Object.keys(this.state).map(function (key) {
		//     validateFcn.validateField(key, formValues[key]);
		// });

		Object.keys(this.state).map((key) => (
			this.validateField(key, formValues[key])
		))

		this.setState(formValues); // re-render to fire validation

		console.log(this.state);
		
		event.preventDefault();
	}

	render() {
		const hasError = (fieldName) => {
			console.log(this.state);
			if (this.state.errFields.indexOf(fieldName) !== -1) {
				return true;
			}
			else {
				return false;
			}
		};

		return (
			<form name="add-credit-card">
				<div className={'form-row' + (hasError('card-name') ? ' error' : '')}>
					<label>
						Card name
						<input
							type="text"
							name="card-name"
							// value={this.state["card-name"]}
							onFocus={this.handleFocus}
							onChange={this.handleChange}
							style={{
								/* property: value */
								/* can put styles */
							}} />
					</label>
				</div>
				<div className={'form-row' + (hasError('card-balance') ? ' error' : '')}>
					<label>
						Card balance
						<input 
								type="number" 
								name="card-balance"
								step="0.01" 
								value={this.state.value}
								onFocus={this.handleFocus}
								onChange={this.handleChange} />
					</label>
				</div>
				<div className={'form-row' + (hasError('card-credit-limit') ? ' error' : '')}>
					<label>
						Card credit limit
						<input 
								type="number" 
								name="card-credit-limit"
								step="0.01"
								value={this.state.value}
								onFocus={this.handleFocus}
								onChange={this.handleChange} />
					</label>
				</div>
				<div className={'form-row' + (hasError('card-due-date') ? ' error' : '')}>
					<label>
						Card due date
						<input
								type="number"
								name="card-due-date"
								placeholder="day of month"
								maxLength={2}
								max={31}
								value={this.state.value}
								onFocus={this.handleFocus}
								onChange={this.handleChange} />
					</label>
				</div>
				<div className={'form-row' + (hasError('card-apr') ? ' error' : '')}>
					<label>
						Card APR
						<input 
								type="number" 
								name="card-apr"
								step="0.01"
								value={this.state.value}
								onFocus={this.handleFocus}
								onChange={this.handleChange} />
					</label>
				</div>
				<div className={'form-row' + (hasError('card-annual-fee') ? ' error' : '')}>
					<label>
						Card Annual Fee
						<input 
								type="number" 
								name="card-annual-fee"
								step="0.01"
								value={this.state.value}
								onFocus={this.handleFocus}
								onChange={this.handleChange} />
					</label>
				</div>
				<div className="form-row center">
					<button type="button" onClick={this.handleSubmit}>Add Card</button>
				</div>
			</form>
		);
	}
}

export default AddCreditCard;