import ReactDOM from "react-dom";

import { Node, rootElement } from 'index';

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  it("should render without crashing", () => {
    ReactDOM.render(Node, rootElement);
    expect(ReactDOM.render).toHaveBeenCalled();
    expect(ReactDOM.render).toHaveBeenCalledWith(Node, rootElement);
  });
});
