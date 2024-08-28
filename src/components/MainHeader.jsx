import PropTypes from "prop-types";
import { MdPostAdd, MdMessage } from "react-icons/md";

import style from "./MainHeader.module.css";

function MainHeader({ onCreatePost }) {
  return (
    <header className={style.header}>
      <h1 className={style.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={style.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

MainHeader.propTypes = {
  onCreatePost: PropTypes.func.isRequired,
};

export default MainHeader;
