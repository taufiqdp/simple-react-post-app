import PropTypes from "prop-types";
import style from "./Post.module.css";

function Post({ author, body }) {
  return (
    <li className={style.post}>
      <p className={style.author}>{author}</p>
      <p className={style.text}>{body}</p>
    </li>
  );
}

Post.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string,
};

export default Post;
