import React, { Component } from 'react';

class GetInvolved extends Component {
    render() {
        return (
            <section className="GetInvolved section">
                <h3 className="title">Get Involved</h3>
                <div className="buttons">
                    <a
                        href="https://startupdetroit.herokuapp.com/"
                        className="button is-link is-outlined is-large"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Join our Slack community!
                    </a>
                    <a
                        href="https://www.startupdigest.com/digests/detroit/"
                        className="button is-link is-outlined is-large"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Startup Digest Calendar
                    </a>
                </div>
            </section>
        );
    }
}

export default GetInvolved;
