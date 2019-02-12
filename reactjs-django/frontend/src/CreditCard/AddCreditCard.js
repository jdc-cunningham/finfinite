import React, { Component } from 'react';

class AddCreditCard extends Component {
    render() {
        return (
            <form>
                <div className="AddCreditCard-form-row">
                    <label>
                        Card name
                        <input name="card-name" type="text" />
                    </label>
                </div>
                <div className="AddCreditCard-form-row">
                    <label>
                        Card balance
                        <input type="number" step="0.01" />
                    </label>
                </div>
                <div className="AddCreditCard-form-row">
                    <label>
                        Card credit limit
                        <input type="number" step="0.01" />
                    </label>
                </div>
                <div className="AddCreditCard-form-row">
                    <label>
                        Card due date
                        <input type="number" max-length="2" max-value="31" />
                    </label>
                </div>
                <div className="AddCreditCard-form-row">
                    <label>
                        Card APR
                        <input type="number" step="0.01" />
                    </label>
                </div>
                <button type="button">Add Card</button>
            </form>
        );
    }
}

export default AddCreditCard;