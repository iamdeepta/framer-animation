import { fireEvent, render, screen } from "@testing-library/react";
import { muteButtonContext } from "../App";
import CreateNewButton from "../components/CreateNewButton";

const isMute = false;
const setIsMute = () => {};

test("Create new button is present in the document", () => {
  render(
    <muteButtonContext.Provider value={{ isMute, setIsMute }}>
      <CreateNewButton />
    </muteButtonContext.Provider>
  );
  const createButton = screen.getByRole("button");
  expect(createButton).toBeInTheDocument();
});

test("Create New text is present in the button", () => {
  render(
    <muteButtonContext.Provider value={{ isMute, setIsMute }}>
      <CreateNewButton />
    </muteButtonContext.Provider>
  );
  const createButton = screen.getByRole("button", {
    name: /create new/i,
  });
  expect(createButton).toBeInTheDocument();
});

test("Unordered list of content is present in the document", () => {
  render(
    <muteButtonContext.Provider value={{ isMute, setIsMute }}>
      <CreateNewButton />
    </muteButtonContext.Provider>
  );

  const createButton = screen.getByRole("button", {
    name: /create new/i,
  });
  fireEvent.click(createButton);
  const unorderedList = screen.getByTestId("inner-content");
  expect(unorderedList).toBeInTheDocument();
});
