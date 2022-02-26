import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import chuckSlice, { chuckSel } from "../../features/chuck-noris";
import deleteIcon from "../../images/deleteIcon.png";

const JokeList = () => {
  const chuckJokes = useSelector(chuckSel.chuckJokesSelector);
  const { resetJokes, filterFavorites, resetJoke } = chuckSlice.actions;
  const dispatch = useDispatch();
  const removeFavorites = () => {
    dispatch(resetJokes());
  };
  const deleteCurrent = (id) => {
    dispatch(filterFavorites(id));
  };

  useEffect(() => {
    dispatch(resetJoke());
  }, [dispatch, resetJoke]);

  return (
    <div>
      <div className={"jokes-container"} data-testid={"jokes-list"}>
        {!chuckJokes.data.length && <div>No favorivte Joks</div>}
        {chuckJokes.data.map((elem, index) => {
          return (
            <div key={elem.id + index} className={"element-container"}>
              <img src={elem.icon_url} alt={"img"} />
              <span>{elem.value}</span>
              <button
                style={{
                  backgroundImage: `url(${deleteIcon})`,
                }}
                onClick={() => deleteCurrent(elem.id)}
                className={"deleteElem"}
              />
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={removeFavorites} className={"del-all-jokes"}>
          Delete All Jokes
        </button>
      </div>
    </div>
  );
};

export default JokeList;
