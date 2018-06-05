import React from "react";
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BlackListPage from "./BlackListPage";
import ContactItem from "../../app/components/ContactItem";
configure({ adapter: new Adapter() });

const setup = (blackListContacts, func) => {
  const actions = {
    addToBlackList:jest.fn()
  }
  const component = mount(
    <BlackListPage
      blackListContacts={blackListContacts}
      {...actions}
    />
  );

  return {
    component,
    actions
  };
};

const blackListContacts = [
  {
    firstName: "John",
    lastName: "Smith",
    phoneNumber: "622-456-9888"
  },
  {
    firstName: "Chris",
    lastName: "Nieu",
    phoneNumber: "395-497-2648"
  }
];

describe("BlackListPage component", () => {
  it("should render successfully", () => {
    const { component } = setup(blackListContacts);
    expect(component).toMatchSnapshot();
  });

  it("should not render a <ContactItem /> components", () => {
    const emptyBlackList = [];
    const { component } = setup(emptyBlackList);
    expect(component.find(ContactItem)).toHaveLength(0);
  });

  it("should render 1 <ContactItem /> components", () => {
    const blackListContacts_1 = [
      {
        firstName: "John",
        lastName: "Smith",
        phoneNumber: "622-456-9888"
      }
    ];
    const { component } = setup(blackListContacts_1);
    expect(component.find(ContactItem)).toHaveLength(1);
  });

  it("should render two <ContactItem /> components", () => {
    const { component } = setup(blackListContacts);
    expect(component.find(ContactItem)).toHaveLength(2);
  });

  it("should render empty message of blacklist page", () => {
    const emptyBlackList = [];
    const { component } = setup(emptyBlackList);
    expect(component.find("span").text()).toMatch(
      "There is no person in your black list"
    );
  });

  it("should simulate onBlock function once", () => {
    const { component, actions } = setup([
      {
        firstName: "John",
        lastName: "Smith",
        phoneNumber: "622-456-9888"
      }
    ]);
    component
      .find(ContactItem)
      .find("button")
      .simulate("click");
    expect(actions.addToBlackList.mock.calls.length).toBe(1);
  });
});
