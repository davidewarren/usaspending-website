/**
 * ShownRecipientLocation.jsx
 * Created by michaelbray on 2/17/17.
 */

import React from 'react';

const propTypes = {
    toggleLocation: React.PropTypes.func,
    label: React.PropTypes.string
};

export default class ShownRecipientLocation extends React.Component {

    render() {
        return (
            <button
                className="shown-recipient-location-button"
                value={this.props.label}
                onClick={this.props.toggleLocation}>
                {this.props.label} <span className="close">x</span>
            </button>
        );
    }
}

ShownRecipientLocation.propTypes = propTypes;
