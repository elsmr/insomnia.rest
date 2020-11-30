import React from 'react';
import PropTypes from 'prop-types';
import * as session from '../session';
import {isLocalhost} from '../util';

class CancelButton extends React.Component {
  _handleCancel = async () => {
    // TODO: Better error handling/propagation to the user
    await session.cancelAccount();
    window.location.reload();
  };

  render () {
    return (
      <button id="barecancel-trigger" className="button mt-3">Cancel Subscription</button>
    )
  }

  componentDidMount() {
    const { billingDetails } = this.props;

    const cancellationCallback = () => {
      this._handleCancel()
    }

    if (!window.barecancel) {
      window.barecancel = {
        params: {
          access_token_id: 'bbb62d89-32c8-45cf-b011-9994c8776e87',
          customer_oid: billingDetails.customerId,
          test_mode: isLocalhost(),
          callback_send: cancellationCallback,
        }
      }

      const s = document.createElement('script');
      s.src = 'https://baremetrics-barecancel.baremetrics.com/js/application.js';
      document.body.appendChild(s);
   }
  }
}

CancelButton.propTypes = {
  billingDetails: PropTypes.shape({
    customerId: PropTypes.string.isRequired,
  }),
};


export default CancelButton;
