import React, { Component } from 'react';

class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
          <div class="container-fluid">
              <div class="row">
                  <div class="col-sm-6 col-md-3">
                      <div class="social-box facebook">
                          <i class="fa fa-facebook"></i>
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
                      <button type="button" class="btn btn-primary btn-block">Connect</button>
                  </div>
                  <div class="col-sm-6 col-md-3">
                      <div class="social-box instagram">
                          <i class="fa fa-instagram"></i>
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
                      <button type="button" class="btn btn-primary btn-block">Connect</button>
                  </div>
                  <div class="col-sm-6 col-md-3">
                      <div class="social-box twitter">
                          <i class="fa fa-twitter"></i>
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
                      <button type="button" class="btn btn-primary btn-block">Connect</button>
                  </div>
                  <div class="col-sm-6 col-md-3">
                      <div class="social-box google-plus">
                          <i class="fa fa-google-plus"></i>
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
                      <button type="button" class="btn btn-primary btn-block">Connect</button>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Dashboard;
