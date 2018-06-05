import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ContactItem from "./ContactItem";
configure({ adapter: new Adapter() });

const setup = (first_name, last_name, company, phone_number, is_blocked) => {
  const actions = {
    onBlock: jest.fn()
  };

  const component = mount(
    <ContactItem
      firstName={first_name}
      lastName={last_name}
      company={company}
      phoneNumber={phone_number}
      isBlocked={is_blocked}
      {...actions}
    />
  );
  return {
    component,
    actions,
    name: component.find("span").at(1),
    phoneNumber: component.find("span").at(3),
    button: component.find("button")
  };
};

describe("ContactItem component", () => {
  it("should render successfully", () => {
    const { component } = setup();
    expect(component).toMatchSnapshot();
  });

  it("should render contact item props", () => {
    const { component } = setup(
      "John",
      "Smith",
      "Microsoft",
      "313-223-1120",
      false
    );
    expect(component.props().firstName).toEqual("John");
    expect(component.props().lastName).toEqual("Smith");
    expect(component.props().company).toEqual("Microsoft");
    expect(component.props().phoneNumber).toEqual("313-223-1120");
    expect(component.props().isBlocked).toEqual(false);
  });

  it("should render contact item default props", () => {
    const { component } = setup();
    expect(component.props().firstName).toEqual("First Name");
    expect(component.props().lastName).toEqual("Last Name");
    expect(component.props().phoneNumber).toEqual("122-345-654");
  });

  it("should render button text as `Block` because the user is not blocked", () => {
    const { button } = setup(
      "John",
      "Smith",
      "Microsoft",
      "313-223-1120",
      false
    );
    expect(button.text()).toMatch("Block");
  });

  it("should render button text as `Unblock` because the user is blocked", () => {
    const { button } = setup(
      "John",
      "Smith",
      "Microsoft",
      "313-223-1120",
      true
    );
    expect(button.text()).toMatch("Unblock");
  });

  it("should call button event", () => {
    const { button, actions } = setup();
    button.simulate("click");
    expect(actions.onBlock).toBeCalled();
  });
});
