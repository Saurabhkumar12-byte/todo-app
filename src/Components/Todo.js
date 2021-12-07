import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      currValue: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      currValue: e.target.value,
    });
  };

  addTask=()=>{
    this.setState({
      tasks:[...this.state.tasks,{task:this.state.currValue}]
    })
  }

  render() {
    return (
      <div className="container fw-bold fs-5">
        <div className="row">
          <div className="col-lg-7 mx-auto">
            {/* <h3>Your Routine on the go</h3> */}
            <div className="input-group mb-3 my-5">
              <input
                type="text"
                className="form-control shadow-none "
                placeholder="Write your task"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={this.state.currValue}
                onChange={this.handleChange}
              />
              <button
                className="btn btn-primary shadow-none"
                type="button"
                id="button-addon2"
                onClick={this.addTask}
              >
                Add
              </button>
            </div>
            <div className="items">
            {this.state.tasks.map((task) => (
              <div className="card">
                <div className="card-body">
                  <p className="card-text">{task.task}</p>
                  <hr />
                  <a href="#" className="btn btn-danger">
                    Delete
                  </a>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    );
  }
}
