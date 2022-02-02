import React from "react";
import { Link, useParams } from "react-router-dom";

const EditContact = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <h1 className="display-2 my-5 text-center">Add Student {id}</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" className="form-control" />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                placeholder="Phone number"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Update Student"
                className="btn btn-success"
              />
              <Link to="/" className="btn btn-danger m-3 ">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default EditContact;
