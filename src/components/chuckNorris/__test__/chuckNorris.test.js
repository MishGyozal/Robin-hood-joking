import { fireEvent, render, screen } from "@testing-library/react";
import ChuckNorris from "../chuckNorris";
import { Provider } from "react-redux";
import { Store } from "../../../app/store";

const chuckRender = () => {
  return (
    <Provider store={Store()}>
      <ChuckNorris />
    </Provider>
  );
};

describe("chuckNorris Component", () => {
  test("one joke button find", () => {
    render(chuckRender());
    const showOneBtn = screen.findByText(/Show One Joke/i);
    expect(showOneBtn).toBeInTheDocument;
  });

  test("one joke button click detect", () => {
    render(chuckRender());
    const showOneBtn = screen.getByText(/Show One Joke/i);
    fireEvent.click(showOneBtn);
    const favoriteContainer = screen.findByTestId(/element-container/i);
    expect(favoriteContainer).toBeTruthy();
  });

  test("3 second button find", () => {
    render(chuckRender());
    const showMoreBtn = screen.findByRole("button", {
      name: /Start Showing in every 3 second/i,
    });
    expect(showMoreBtn).toBeInTheDocument;
  });

  test("3 second button click detect", () => {
    render(chuckRender());
    const showMoreBtn = screen.getByRole("button", {
      name: /Start Showing in every 3 second/i,
    });
    fireEvent.click(showMoreBtn);
    const favoriteContainer = screen.findByTestId(/element-container/i);
    expect(favoriteContainer).toBeTruthy();
  });
});
