import { useParams } from "react-router-dom";

export default function User() {
  const params = useParams();
  return (
    <div>
      <h2>Home</h2>
      <h1>User...</h1>
    </div>
  );
}
