import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";
configure({ adapter: new Adapter() });

const setup = props => {
  const component = shallow(<Header />);

  return {
    component: component
  };
};

describe("Header component", () => {
  it("should render successfully", () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });
});
