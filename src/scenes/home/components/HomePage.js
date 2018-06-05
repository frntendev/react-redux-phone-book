import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";
import StickyContact from "../components/StickyContact";
import ContactItem from "../../app/components/ContactItem";

const styles = {
  root: css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    justify-content: center;
    label: home-page-root;
    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 400px) {
      grid-template-columns: 1fr;
    }
  `,
  input: css`
    height: 40px;
    width: 100%;
    font-size: 1.2rem;
    padding-left: 10px;
    border-radius: 2px;
    border: none;
    outline: none;
    font-family: "PT Sans", sans-serif;
    box-sizing: border-box;
    background: #aaaaaa29;
  `
};

class HomePage extends React.Component {
  componentDidMount() {
    if (this.props.contactsInfo.readyState !== "CONTACT_INFO_FETCHED")
      this.props.getContactsInfo();
  }

  handleInputChange = event => {
    this.props.changeSearchTerm(event.target.value);
  };

  // showing contacts group by alphabet when search input is empty
  renderContactsAlphabet = () => {
    const props = this.props;
    return (
      props.showAlphabet &&
      props.contactsByAlphabet.map((item, index) => {
        return (
          <StickyContact
            key={`sticky-item-${index}`}
            id={index}
            title={item.letter}
            items={item.contacts}
            onBlock={props.addToBlackList}
          />
        );
      })
    );
  };

  // showing contacts based on what you write on input
  renderFilteredContacts = () => {
    const props = this.props;
    return (
      props.showFiltered &&
      props.filteredContacts.map((item, index) => {
        return (
          <ContactItem
            key={`contact-item-${index}`}
            firstName={item.first_name}
            lastName={item.last_name}
            company={item.company}
            phoneNumber={item.phone_number}
            isBlocked={item.is_blocked}
            onBlock={() => props.addToBlackList(item.id)}
          />
        );
      })
    );
  };

  render() {
    const props = this.props;
    return [
      <input
        key="search-input"
        className={styles.input}
        type="text"
        placeholder="Search..."
        value={props.searchTerm}
        onChange={this.handleInputChange}
      />,
      this.renderContactsAlphabet(),
      this.renderFilteredContacts(),
      props.contactsInfo.readyState === "CONTACT_INFO_FAILED" && (
        <div id="error-message" key="error-message">Something is wrong. Please try again</div>
      )
    ];
  }
}

export default HomePage;

HomePage.propTypes = {
  contactsInfo: PropTypes.object.isRequired,
  searchTerm: PropTypes.string,
  showAlphabet: PropTypes.bool,
  showFiltered: PropTypes.bool,
  getContactsInfo: PropTypes.func,
  changeSearchTerm: PropTypes.func,
  addToBlackList: PropTypes.func
};
