import React, { Component } from 'react';

class GetInvolved extends Component {
  render() {
    return (
      <section className="GetInvolved section" id="get-involved">
        <div className="container">
          <h3 className="title has-text-centered">Get Involved</h3>

          <div className="buttons-toprow">

            <a
              href="https://www.meetup.com/Startup-Detroit/"
              className="button is-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the meetup
            </a>




          </div>

          <div className="buttons">
            <a
              href="https://startupdetroit.herokuapp.com/"
              className="button is-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our Slack community
            </a>


            <a
              href="https://www.startupdigest.com/digests/detroit/"
              className="button is-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Startup Digest Detroit
            </a>

          </div>
        </div>
      </section>
    );
  }
}

export default GetInvolved;
