export default function SingleCat({ cat }) {
  const imageStyle = {
    width: "60%",
    backgroundColor: "lightgrey",
  };
  return (
    <div className="card">
      <img src={"vite.svg"} style={imageStyle} alt={cat.name}></img>
      <h1>{cat.name} </h1>
      <p>{cat.latinName} </p>
    </div>
  );
}
