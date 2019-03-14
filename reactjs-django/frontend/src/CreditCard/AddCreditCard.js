import React, { Component } from 'react';
import './AddCreditCard.css';

class AddCreditCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			errFields: [],
			formFields: {
				'card-name': {
				labelText: 'Card Name',
				attrs: {
					'type': 'text',
					'value': ''
				},
				events: {
					onFocus: this.handleFocus,
					onChange: this.handleChange
				},
				style: '{}'
				},
				'card-balance': {
					labelText: 'Card Balance',
					attrs: {
						'type': 'number',
						'value': '',
						'step': '0.01'
					},
					events: {
						onFocus: this.handleFocus,
						onChange: this.handleChange
					},
					style: '{}'
				},
				'card-credit-limit': {
					labelText: 'Card Credit Limit',
					attrs: {
						'type': 'number',
						'value': '',
						'step': '0.01'
					},
					events: {
						onFocus: this.handleFocus,
						onChange: this.handleChange
					},
					style: '{}'
				},
				'card-due-date': {
					labelText: 'Card Due Date',
					attrs: {
						'type': 'number',
						'value': 0,
						'step': '1',
						'placeholder': 'day of month',
						'maxLength': 2,
						'max': 31,
					},
					events: {
						onFocus: this.handleFocus,
						onChange: this.handleChange
					},
					style: '{}'
				},
				'card-apr': {
					labelText: 'Card APR',
					attrs: {
						'type': 'number',
						'value': '',
						'step': '0.01'
					},
					events: {
						onFocus: this.handleFocus,
						onChange: this.handleChange
					},
					style: '{}'
				},
				'card-annual-fee': {
					labelText: 'Card Annual Fee',
					attrs: {
						'type': 'number',
						'value': '',
						'step': '0.01'
					},
					events: {
						onFocus: this.handleFocus,
						onChange: this.handleChange
					},
					style: '{}'
				}
			}
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
		const curState = this.state;

		const hasError = (fieldName) => {
			console.log(this.state);
			if (this.state.errFields.indexOf(fieldName) !== -1) {
				return true;
			}
			else {
				return false;
			}
		};

		// this was bad data design wasn't aware had to use map for output
		const formFieldsArr = [];

		Object.keys(curState.formFields).forEach(function (cardInput) {
			formFieldsArr.push([cardInput, curState.formFields[cardInput]]);
		});

		const ifSet = (style) => {
			// this is just filler, wasn't aware non-empty requirement
			return style === '{}' ? { backgroundColor: 'white' } : style;
		}

		const formFields = formFieldsArr.map(function (cardInput, key) {
			var formField = cardInput[1];

			return <div key={ key } className={'form-row' + (hasError(cardInput) ? ' error' : '')}>
				<label>
					{ formField.labelText }
					<input
						type={ formField.attrs.type }
						name={ cardInput[0] }
						step={ formField.attrs.step }
						maxLength={ formField.attrs.maxLength }
						placeholder={ formField.attrs.placeholder }
						max={ formField.attrs.max }
						value={ formField.attrs.value }
						onFocus={ formField.events.onFocus }
						onChange={ formField.events.onChange }
						style={ ifSet(formField.style) } />
				</label>
			</div>;
		});

		return (
			<form name="add-credit-card">
				{ formFields }
				<div className="form-row center">
					<button type="button" onClick={this.handleSubmit}>Add Card</button>
				</div>
			</form>
		);
	}
}

export default AddCreditCard;