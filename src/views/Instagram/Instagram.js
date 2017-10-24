import React, { Component } from 'react';

class Instagram extends Component {

  render() {
    return (
      <div className="animated fadeIn">
          <div class="container-fluid">
              <form>
                  <textarea type="text" cols="100" class="form-control" placeholder=""></textarea>
                  <br/>
                  <button className="btn btn-sm btn-success">Post</button>
              </form>
          </div>
      </div>
    )
  }
}

export default Instagram;
