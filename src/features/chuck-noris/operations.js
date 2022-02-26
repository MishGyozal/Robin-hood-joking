import { chuckSlice } from "./chuckSlice";
import axios from "axios";

const getJoke = () => {
  const { setJoke } = chuckSlice.actions;
  return async (dispatch) => {
    try {
      let { data } = await axios.get("https://api.chucknorris.io/jokes/random");
      dispatch(setJoke(data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const chuckOp = {
  getJoke,
};
