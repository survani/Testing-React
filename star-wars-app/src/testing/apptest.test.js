// @ts-nocheck
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, wait } from "@testing-library/react";
import { getData as data } from "../api";

//component needed
import StarWarsCharacters from "../components/StarWarsCharacters";

jest.mock("../api");

test("Check if Previous Button Work", async () => {
  // @ts-ignore
  data.mockReturnValueOnce({
    next: "https://swapi.co/api/people/?page=2",
    results: [
      {
        name: "Luke Skywalker"
      }
    ]
  });
  //makes getByText turns into a function
  const { getByText } = render(<StarWarsCharacters />);

  //defined a let prevCharacter variable to getByText to render <StarWarsCharacters/>
  let prevCharacter = getByText(/previous/i);

  //fireEvent => triggers prevCharacter
  fireEvent.click(prevCharacter);

  expect(data).toHaveBeenCalledTimes(1);

  //awaits then
  await wait(() => expect(getByText(/previous/i)));
});

// test("Check if Next Button Work", async () => {
//   const { getByText } = render(<StarWarsCharacters />);
//   let nextCharacter = getByText(/next/i);
//   fireEvent.click(nextCharacter);

//   await wait(() => expect(getByText(/next/i)));
// });

//NOTES =>
//mock -- are functions that keep track how they are called and what they are called with.
