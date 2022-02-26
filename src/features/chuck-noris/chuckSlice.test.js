const { chuckSlice } = require("./chuckSlice");

const { setJokes, resetJokes, setJoke, resetJoke, filterFavorites } =
  chuckSlice.actions;

const mockJoke = {
  data: [
    {
      categories: [],
      created_at: "2020-01-05 13:42:21.179347",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "X5AMMHQKTnSdIwIBjYze1A",
      updated_at: "2020-01-05 13:42:21.179347",
      url: "https://api.chucknorris.io/jokes/X5AMMHQKTnSdIwIBjYze1A",
      value: "The Batmobile was fashioned after Chuck Norris' pimpmobile.",
    },
  ],
};

const mockJoke2 = {
  data: [
    {
      categories: [],
      created_at: "2020-01-05 13:42:21.179347",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "X5AMMHQKTnSdIwIBjYze1A11",
      updated_at: "2020-01-05 13:42:21.179347",
      url: "https://api.chucknorris.io/jokes/X5AMMHQKTnSdIwIBjYze1A",
      value: "The Batmobile was fashioned after Chuck Norris' pimpmobile.",
    },
    {
      categories: [],
      created_at: "2020-01-05 13:42:21.179347",
      icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      id: "X5AMMHQKTnSdIwIBjYze1A",
      updated_at: "2020-01-05 13:42:21.179347",
      url: "https://api.chucknorris.io/jokes/X5AMMHQKTnSdIwIBjYze1A",
      value: "The Batmobile was fashioned after Chuck Norris' pimpmobile.",
    },
  ],
};

describe("Chuck Norris Reducer Test", () => {
  test("set Jokes Data", async () => {
    expect(
      chuckSlice.reducer({ jokes: { data: [] } }, setJokes(mockJoke))
    ).toEqual({ jokes: { data: mockJoke.data } });
  });

  test("clear Jockes", async () => {
    expect(
      chuckSlice.reducer({ jokes: { data: [] } }, setJokes(mockJoke))
    ).toEqual({ jokes: { data: mockJoke.data } });
    expect(
      chuckSlice.reducer({ jokes: { data: mockJoke.data } }, resetJokes())
    ).toEqual({ jokes: { data: [] } });
  });

  test("Filter Jockes", async () => {
    expect(
      chuckSlice.reducer(
        { jokes: { data: mockJoke2.data } },
        filterFavorites("X5AMMHQKTnSdIwIBjYze1A11")
      )
    ).toEqual({ jokes: { data: mockJoke.data } });
  });

  test("set Joke", async () => {
    expect(chuckSlice.reducer({ joke: {} }, setJoke(mockJoke.data[0]))).toEqual(
      {
        joke: mockJoke.data[0],
      }
    );
  });

  test("reset Joke", async () => {
    expect(chuckSlice.reducer({ joke: mockJoke.data[0] }, resetJoke())).toEqual(
      {
        joke: {},
      }
    );
  });
});
