import { useState } from "react";
import PropTypes from "prop-types";
import NewPost from "./NewPost";
import Post from "./Post";
import style from "./PostsList.module.css";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}
      <ul className={style.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Ahmad" body="React is Awesome!" />
      </ul>
    </>
  );
}

PostsList.propTypes = {
  isPosting: PropTypes.bool.isRequired,
  onStopPosting: PropTypes.func.isRequired,
};

export default PostsList;
