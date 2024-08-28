import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const openModalHandler = () => {
    setModalIsVisible(true);
  };

  const closeModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <MainHeader onCreatePost={openModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisible}
          onStopPosting={closeModalHandler}
        />
      </main>
    </>
  );
}

export default App;
