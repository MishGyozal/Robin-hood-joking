import { Provider } from "react-redux";
import { Store } from "../../../app/store";
import JokeList from "../JokeList";
import { fireEvent, render, screen } from "@testing-library/react";

const chuckRender = () => {
  return (
    <Provider store={Store()}>
      <JokeList />
    </Provider>
  );
};

describe("Joke List Container", () => {
  test("Delete button find", async () => {
    render(chuckRender());
    const deleteBtn = screen.getByText(/Delete All Jokes/i);
    expect(deleteBtn).toBeInTheDocument;
  });
  test("List Snapshot", async () => {
    const list = render(chuckRender());
    expect(list).toMatchSnapshot();
  });

  test("DeleteClickDetect", async () => {
    render(chuckRender());
    const deleteBtn = screen.getByText(/Delete All Jokes/i);
    fireEvent.click(deleteBtn);
    const noJokes = screen.findByText(/No favorivte Joks/i);
    expect(noJokes).toBeTruthy();
  });
});
