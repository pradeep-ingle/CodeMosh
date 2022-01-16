const Like = (props) => {
  return (
    <span style={{ cursor: "pointer" }} onClick={props.onClick}>
      {props.liked ? "Liked" : "Like"}
    </span>
  );
};

export default Like;
