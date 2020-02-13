import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, wait } from "@testing-library/react"

//component needed
import StarWarsCharacters from "../components/StarWarsCharacters";

test("Check if Previous Button Work", async () => {
  //makes getByText turns into a function
  const { getByText } = render(<StarWarsCharacters />);

  //defined a let prevCharacter variable to getByText to render <StarWarsCharacters/> 
  let prevCharacter = getByText(/previous/i);

  //fireEvent => triggers prevCharacter
  fireEvent.click(prevCharacter);

  //awaits then 
  await wait(() => expect(getByText(/previous/i)));
});


//will add this too the same test above. 
test("Check if Next Button Work", async () => {
  const { getByText } = render(<StarWarsCharacters />);
  let nextCharacter = getByText(/next/i);
  fireEvent.click(nextCharacter);

  await wait(() => expect(getByText(/next/i)));
});