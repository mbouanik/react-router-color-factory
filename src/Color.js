import { Link, useParams } from "react-router-dom";

const Color = ({ colors }) => {
  const name = useParams();
  const color = colors.find((item) => item.name == name.name);

  return (
    <div style={{ backgroundColor: color.color, minHeight: "100vh" }}>
      <Link to="/colors">Go Back </Link>
    </div>
  );
};

export default Color;
