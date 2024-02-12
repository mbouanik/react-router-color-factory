import { Link, Navigate, useParams } from "react-router-dom";

const Color = ({ colors }) => {
  const name = useParams();
  const color = colors.find((item) => item.name === name.name);
  if (!color) {
    return <Navigate to="/colors" />;
  }

  return (
    <div style={{ backgroundColor: color.color, minHeight: "100vh" }}>
      <h1 style={{ color: "white" }}>
        {`Beautiful ${color.name} Color :)`}
        <p>
          {" "}
          <Link to="/colors">Go Back </Link>{" "}
        </p>
      </h1>
    </div>
  );
};

export default Color;
