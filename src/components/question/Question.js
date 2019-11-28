import React from 'react';

import './question.css'

class Question extends React.Component {
  componentWillMount = () => {
    //
  }

  render() {
    return (
		<section className="question-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src="assets/images/question-left.png" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="section-heading">
                <h5 className="subtitle">
                    If you have any
                </h5>
                <h2 className="title">
                    questions
                </h2>
                <p className="text">
                    Our top priorities are to protect your privacy, 
                    provide secure transactions, and safeguard your data. 
                </p>
                <p className="text">
                    When you're ready to play, registering an 
                    account is required so we know you're of legal age and so no one else can use your account.We answer the most commonly asked lotto 
                    questions..
                </p>
                <a href="/#" className="mybtn1">Check FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Question;