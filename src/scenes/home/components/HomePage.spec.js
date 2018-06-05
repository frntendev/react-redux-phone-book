import React from "react";
import { mount, shallow, configure } from "enzyme";
import sinon from "sinon";
import Adapter from "enzyme-adapter-react-16";
import HomePage from "./HomePage";
import StickyContact from "./StickyContact";
import ContactItem from "../../app/components/ContactItem";
import * as Actions from "../../../constants";
configure({ adapter: new Adapter() });

const setup = (
  contactsInfo,
  contactsByAlphabet,
  filteredContacts,
  searchTerm,
  showAlphabet,
  showFiltered,
  getContactsInfo
) => {
  const actions = {
    changeSearchTerm: jest.fn(),
    getContactsInfo: jest.fn(),
    addToBlackList: jest.fn()
  };
  const component = mount(
    <HomePage
      contactsInfo={contactsInfo}
      contactsByAlphabet={contactsByAlphabet}
      filteredContacts={filteredContacts}
      searchTerm={searchTerm}
      showAlphabet={showAlphabet}
      showFiltered={showFiltered}
      {...actions}
    />
  );

  return {
    component,
    actions
  };
};
const contactsInfo = {
  readyState: Actions.CONTACT_INFO_FETCHED,
  result: [
    {
      id: 88,
      first_name: "Randie",
      last_name: "Addekin",
      email: "raddekin2f@yandex.ru",
      gender: "Male",
      phone_number: "193-323-1494",
      company: "Innotype",
      is_blocked: false
    },
    {
      id: 14,
      first_name: "Reinhard",
      last_name: "Agastina",
      email: "ragastinad@hostgator.com",
      gender: "Male",
      phone_number: "835-300-8197",
      company: "Quinu",
      is_blocked: false
    },
    {
      id: 11,
      first_name: "Nichols",
      last_name: "Aksell",
      email: "naksella@microsoft.com",
      gender: "Male",
      phone_number: "346-173-3524",
      company: "Yodoo",
      is_blocked: false
    }
  ]
};

const contactsByAlphabet = [
  {
    letter: "A",
    contacts: [
      {
        id: 88,
        first_name: "Randie",
        last_name: "Addekin",
        email: "raddekin2f@yandex.ru",
        gender: "Male",
        phone_number: "193-323-1494",
        company: "Innotype",
        is_blocked: false
      }
    ]
  },
  {
    letter: "D",
    contacts: [
      {
        id: 94,
        first_name: "Felicity",
        last_name: "Donwell",
        email: "fdonwell2l@w3.org",
        gender: "Female",
        phone_number: "558-770-3160",
        company: "Skimia",
        is_blocked: false
      }
    ]
  }
];
const filteredContacts = [
  {
    id: 11,
    first_name: "Nichols",
    last_name: "Aksell",
    email: "naksella@microsoft.com",
    gender: "Male",
    phone_number: "346-173-3524",
    company: "Yodoo",
    is_blocked: false
  }
];
describe("HomePage component", () => {
  it("should render successfully", () => {
    const { component } = setup(contactsInfo);
    expect(component).toMatchSnapshot();
  });

  it("should call `getContactInfo` in `componentDidMount` if there is no data", () => {
    contactsInfo.readyState = Actions.CONTACT_INFO_INVALID;
    const { component } = setup(contactsInfo);
    const spy = sinon.spy(HomePage.prototype, "componentDidMount");
    component.instance().componentDidMount();
    expect(spy.calledOnce).toEqual(true);
  });

  it("should call `handleInputChange` with input value", () => {
    const { component, actions } = setup(contactsInfo);
    component.instance().handleInputChange({ target: { value: "test" } });
    expect(actions.changeSearchTerm.mock.calls.length).toBe(1);
  });

  it("should render `StickyContact` by alphabet when `showAlphabet` is `true` ", () => {
    const { component, actions } = setup(
      contactsInfo,
      contactsByAlphabet,
      filteredContacts,
      "",
      true //showAlphabet = true
    );
    expect(component.find(StickyContact)).toHaveLength(2);
  });

  it("should not render `StickyContact` by alphabet when `showAlphabet` is `false` ", () => {
    const { component, actions } = setup(
      contactsInfo,
      contactsByAlphabet,
      filteredContacts,
      "",
      false //showAlphabet = true
    );
    expect(component.find(StickyContact)).not.toHaveLength(2);
  });

  it("should render `ContactItem` items when `showFiltered` is `true`. In this case we have one filtered item ", () => {
    const { component, actions } = setup(
      contactsInfo,
      contactsByAlphabet,
      filteredContacts,
      "",
      undefined,
      true //ShowFiltered = true
    );
    expect(component.find(ContactItem)).toHaveLength(1);
  });

  it("should not render `ContactItem` items when `showFiltered` is `false`.", () => {
    const { component, actions } = setup(
      contactsInfo,
      contactsByAlphabet,
      filteredContacts,
      "",
      undefined,
      false //ShowFiltered = true
    );
    expect(component.find(ContactItem)).not.toHaveLength(1);
  });

  it("should simulate onBlock function once", () => {
    const { component, actions } = setup(
      contactsInfo,
      contactsByAlphabet,
      filteredContacts,
      "",
      undefined,
      true //ShowFiltered = true
    );
    component
      .find(ContactItem)
      .find("button")
      .simulate("click");
    expect(actions.addToBlackList.mock.calls.length).toBe(1);
  });

  it("should display message when connection is gone or something is wrong", () => {
    contactsInfo.readyState = Actions.CONTACT_INFO_FAILED;
    const { component, actions } = setup(contactsInfo);
    expect(component.find("#error-message").text()).toMatch(
      "Something is wrong. Please try again"
    );
  });
});
