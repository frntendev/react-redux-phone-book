import React from "react";
import { mount, shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Sticky from "react-stickynode";
import StickyContact from "./StickyContact";
import ContactItem from "../../app/components/ContactItem";
configure({ adapter: new Adapter() });

const setup = (id, title, items) => {
  const actions = {
    onBlock: jest.fn()
  };
  const component = mount(
    <StickyContact id={id} title={title} items={items} {...actions} />
  );

  return {
    component,
    actions
  };
};
const contacts = [
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
  }
];

describe("StickyContact component", () => {
  it("should render one `Sticky`", () => {
    const { component } = setup(1, "Test", contacts);
    expect(component.find(Sticky)).toHaveLength(1);
  });

  it("should render two `ContactItem`", () => {
    const { component } = setup(1, "Test", contacts);
    expect(component.find(ContactItem)).toHaveLength(2);
  });

  it("should render zero `ContactItem`", () => {
    const { component } = setup(1, "Test", []);
    expect(component.find(ContactItem)).toHaveLength(0);
  });

  it("should renderprops", () => {
    const { component } = setup(1, "Test", contacts);
    expect(component.props().title).toEqual("Test");
    expect(component.props().items).toEqual(contacts);
    expect(component.props().id).toEqual(1);
  });

  it("should simulate onBlock function once", () => {
    const { component, actions } = setup(1, "Test", [
      {
        id: 14,
        first_name: "Reinhard",
        last_name: "Agastina",
        email: "ragastinad@hostgator.com",
        gender: "Male",
        phone_number: "835-300-8197",
        company: "Quinu",
        is_blocked: false
      }
    ]);

    component
      .find(ContactItem)
      .find("button")
      .simulate("click");
    expect(actions.onBlock.mock.calls.length).toBe(1);
  });
});
