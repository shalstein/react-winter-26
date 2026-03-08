export default function Gallery() {
  const imgUrl = "https://placehold.co/600x400";
  return (
    <div>
      <img src={imgUrl} alt="" />
      <img src={imgUrl} alt="" />
    </div>
  );
}
