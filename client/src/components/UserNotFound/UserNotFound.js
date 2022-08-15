import React from "react";
import { Link } from "react-router-dom";
import "./UserNotFound.scss";

export default function UserNotFound() {
  return (
    <div className="user-not-found">
      <p>User Not Found</p>
      <p>
        Link might be corrupt or user no longer exists.
      </p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}
