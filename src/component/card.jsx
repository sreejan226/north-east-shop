const Card = ({ post }) => {
  return (
    <div className="border-indigo-500 border-4 ">
      <h1>{post.name}</h1>
      <h2>{post.email}</h2>
      <h3>{post.website}</h3>
    </div>
  );
};

export default Card;
