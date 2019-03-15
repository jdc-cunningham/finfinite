import React, { Component } from 'react';
import axios from 'axios';
import './AddCreditCard.css';

class AddCreditCard extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleFocus = this.handleFocus.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

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
					labelText: 'Card Due Date (day of month)',
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
		let curState = this.state.formFields;
		curState[event.target.name]['attrs']['value'] = event.target.value
		this.setState({
			formFields: curState
		});
	}

	handleFocus(event) {
		let curErrFields = this.state.errFields;
		let arrIndex = curErrFields.indexOf(event.target.name);

		if ( curErrFields.length && arrIndex > -1 ) {
			curErrFields.splice(arrIndex, 1);
			this.setState({ curErrFields });
		}
	}

	handleSubmit(event) {
		const formValues = this.state;
		Object.keys(formValues.formFields).map((key) => (
			this.validateField(key, formValues.formFields[key]['attrs']['value'])
		))
		this.setState(formValues); // re-render to fire validation

		if ( !this.state.errFields.length ) {
			const postUrl = '/methods/save_cc.php',
						formFields = this.state.formFields,
						data = new FormData();

			data.append('card-name', formFields['card-name']['attrs']['value']);
			data.append('card-balance', formFields['card-balance']['attrs']['value']);
			data.append('card-credit-limit', formFields['card-credit-limit']['attrs']['value']);
			data.append('card-due-date', formFields['card-due-date']['attrs']['value']);
			data.append('card-apr', formFields['card-apr']['attrs']['value']);
			data.append('card-annual-fee', formFields['card-annual-fee']['attrs']['value']);

			axios.post(	postUrl, data )
			.then( function( response ) {
				console.log(response);
			})
			.catch( function ( error ) {
				console.log(error);
			});
		}

		event.preventDefault();
	}

	render() {
		const curState = this.state;
		const hasError = (fieldName) => {
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

			return <div key={ key } className={'form-row' + (hasError(cardInput[0]) ? ' error' : '')}>
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