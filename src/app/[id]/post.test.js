import { render, screen } from "@testing-library/react";
import PostPage from "./page";
import "@testing-library/jest-dom";
// new stuff
import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();

describe("HeroPage", () => {
  // new stuff
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should render the heading", async () => {
    // arrange
    // new stuff
    const post =  {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };
    fetchMock.mockResponseOnce(JSON.stringify(post));

    // act
    const jsx = await PostPage({ params: { id: 1 } });
    render(jsx);

    // assert
    const headingElement = await screen.getByTestId("title");
    expect(headingElement).toHaveTextContent("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
  });
});