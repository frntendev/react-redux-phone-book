import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";
import ContactItem from "../../app/components/ContactItem";

const styles = {
  root: css`
    display: grid;
    grid-gap: 15px;
  `,
  title: css`
    font-size: 1.8rem;
    font-weight: bold;
  `,
  empty: css`
    font-size: 2rem;
    color: #e0e0e0;
    text-align: center;
    margin-top: 30px;
    label: empty;
  `
};

const BlackListPage = props => {
  return (
    <div id="black-list-container" className={styles.root}>
      <p className={styles.title}>Black list</p>
      {props.blackListContacts.length === 0 && (
        <div className={styles.empty}>
          <span>There is no person in your black list</span>
        </div>
      )}
      {props.blackListContacts.map((item, index) => {
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
      })}
    </div>
  );
};

export default BlackListPage;

BlackListPage.propTypes = {
  blackListContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addToBlackList: PropTypes.func
};
