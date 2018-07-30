import React, { Component } from 'react';

class GetInvolved extends Component {
  render() {
    return (
      <section className="GetInvolved section" id="get-involved">
        <div className="container">
          <h3 className="title has-text-centered">Get Involved</h3>
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
              href="https://docs.google.com/forms/d/e/1FAIpQLScoj2AXf9EuPJitkVV1Ju7G8NNWAIbPx-3rMBxCX-Q1LJcYdQ/viewform"
              className="button is-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our email list
            </a>

            <a
              href="https://www.startupdigest.com/digests/detroit/"
              className="button is-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Startup Digest Calendar
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default GetInvolved;
