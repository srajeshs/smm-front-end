import React, { Component } from 'react';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-6 col-md-3">
                      <div className="social-box facebook">
                          <i className="fa fa-facebook"></i>
                          <ul>
                              <li>
                                  <strong>89k</strong>
                                  <span>Posts</span>
                              </li>
                              <li>
                                  <strong>459</strong>
                                  <span>feeds</span>
                              </li>
                          </ul>
                      </div>
                      <button type="button" className="btn btn-primary btn-block">Connect</button>
                  </div>
                  <div className="col-sm-6 col-md-3">
                      <div className="social-box instagram">
                          <i className="fa fa-instagram"></i>
                          <ul>
                              <li>
                                  <strong>500+</strong>
                                  <span>Posts</span>
                              </li>
                              <li>
                                  <strong>292</strong>
                                  <span>feeds</span>
                              </li>
                          </ul>
                      </div>
                      <button type="button" className="btn btn-primary btn-block">Connect</button>
                  </div>
                  <div className="col-sm-6 col-md-3">
                      <div className="social-box twitter">
                          <i className="fa fa-twitter"></i>
                          <ul>
                              <li>
                                  <strong>973k</strong>
                                  <span>followers</span>
                              </li>
                              <li>
                                  <strong>1.792</strong>
                                  <span>tweets</span>
                              </li>
                          </ul>
                      </div>
                      <button type="button" className="btn btn-primary btn-block">Connect</button>
                  </div>
                  <div className="col-sm-6 col-md-3">
                      <div className="social-box google-plus">
                          <i className="fa fa-google-plus"></i>
                          <ul>
                              <li>
                                  <strong>894</strong>
                                  <span>followers</span>
                              </li>
                              <li>
                                  <strong>92</strong>
                                  <span>circles</span>
                              </li>
                          </ul>
                      </div>
                      <button type="button" className="btn btn-primary btn-block">Connect</button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Dashboard;
