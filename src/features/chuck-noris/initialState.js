export const initialChuckState = () => {
  return {
    joke: {},
    jokes: {
      data: JSON.parse(localStorage.getItem("jokes"))?.data || [],
    },
  };
};
