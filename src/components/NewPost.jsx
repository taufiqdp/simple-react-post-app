import PropTypes from "prop-types";
import style from "./NewPost.module.css";

function NewPost(props) {
  return (
    <form className={style.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea name="body" required rows={3} onChange={props.onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={props.onAuthorChange} />
      </p>
    </form>
  );
}

NewPost.propTypes = {
  onBodyChange: PropTypes.func.isRequired,
  onAuthorChange: PropTypes.func.isRequired,
};

export default NewPost;
