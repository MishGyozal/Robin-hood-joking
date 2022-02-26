import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import chuckSlice, { chuckOp, chuckSel } from "../../features/chuck-noris";
import deleteIcon from "../../images/deleteIcon.png";
const ChuckNorris = () => {
  const chuckJoke = useSelector(chuckSel.chuckJokeSelector);
  const [showRecursive, setShowRecursive] = useState(false);
  const dispatch = useDispatch();
  const { setJokes, filterFavorites } = chuckSlice.actions;
  const [disableAdd, setDisableAdd] = useState(false);
  const [disableDel, setDisableDel] = useState(true);

  const addFavorite = () => {
    setDisableAdd(true);
    setDisableDel(false);
    dispatch(setJokes({ data: [chuckJoke] }));
  };

  const recursiveShowing = () => {
    setShowRecursive((prevState) => !prevState);
  };

  const showOneHandler = () => {
    setShowRecursive(false);
    setDisableAdd(false);
    setDisableDel(true);
    dispatch(chuckOp.getJoke());
  };

  useEffect(() => {
    if (showRecursive) {
      const setNewJoke = setInterval(() => {
        setDisableAdd(false);
        setDisableDel(true);
        dispatch(chuckOp.getJoke());
      }, 3000);
      return () => {
        clearTimeout(setNewJoke);
      };
    }
  }, [showRecursive]);

  const deleteFavorites = (id) => {
    setDisableAdd(false);
    setDisableDel(true);
    dispatch(filterFavorites(id));
  };

  return (
    <div className={"container-root"}>
      <div className={"show-btn-container"}>
        <div>
          <button onClick={recursiveShowing}>
            {showRecursive
              ? "Stop Showing Joks in every 3 second"
              : "Start Showing in every 3 second"}
          </button>
        </div>
        <div>
          <button onClick={showOneHandler}>Show One Joke</button>
        </div>
      </div>

      <div>
        {chuckJoke.id && (
          <div
            className={"element-container"}
            data-testid={"element-container"}
          >
            <img src={chuckJoke.icon_url} alt={"img"} />
            <span>{chuckJoke.value}</span>
            <div>
              <button onClick={addFavorite} disabled={disableAdd}>
                Add to Favorite
              </button>
            </div>
            <div>
              <button
                onClick={() => deleteFavorites(chuckJoke.id)}
                disabled={disableDel}
                style={{
                  backgroundImage: `url(${deleteIcon})`,
                }}
                className={"deleteElem"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChuckNorris;
