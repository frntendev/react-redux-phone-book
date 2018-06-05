import React from "react";
import PropTypes from "prop-types";
import Sticky from "react-stickynode";
import { css } from "react-emotion";
import ContactItem from "../../app/components/ContactItem";

const styles = {
  sticky: css`
    background: #ececec;
    height: 40px;
    font-size: 2rem;
    padding-left: 10px;
    color: #fff;
    border-radius: 2px;
    label: sticky;
  `
};

const StickyContact = ({ id, title, items, onBlock }) => {
  return [
    <Sticky
      key={`sticky-${id}`}
      top={50}
      bottomBoundary={`#sticky-alphabet-${id + 1}`}
    >
      <div id={`sticky-alphabet-${id}`} className={styles.sticky}>
        <span>{title}</span>
      </div>
    </Sticky>,
    items.map((item, index) => {
      return (
        <ContactItem
          key={`contact-item-${index}`}
          firstName={item.first_name}
          lastName={item.last_name}
          company={item.company}
          phoneNumber={item.phone_number}
          isBlocked={item.is_blocked}
          onBlock={() => onBlock(item.id)}
        />
      );
    })
  ];
};

export default StickyContact;

StickyContact.defaultProps = {
  id: 0,
  title: "Title"
};

StickyContact.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onBlock: PropTypes.func
};
