import React from "react";
import PropTypes from "prop-types";
import { css, cx } from "react-emotion";

const styles = {
  contactRoot: css`
    display: grid;
    grid-template-columns: 50px 2fr 1fr 2fr 70px;
    align-items: center;
    grid-gap: 20px;
    font-size: 1rem;
    padding-left: 5px;
    padding-right: 5px;
    label: contact-root;
    @media (max-width: 480px) {
      font-size: 0.8rem;
      grid-template-columns: 50px 2fr 2fr 70px;
    }
  `,
  text: css`
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  link: css`
    text-decoration: none;
    color: #000;
    border-bottom: 1px dashed #c1c1c1;
  `,
  avatarRoot: css`
    width: 50px;
    height: 50px;
    background: #e8e8e8;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    label: avatar-root;
  `,
  avatar: css`
    fill: #bfbfbf;
    width: 80%;
    label: avatar;
  `,
  company: css`
    @media (max-width: 480px) {
      display: none;
    }
  `,
  button: css`
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    color: #bb3a3ac9;
    font-size: 1rem;
    border-radius: 2px;
    padding: 5px 0;
    cursor: pointer;
    font-family: "PT Sans", sans-serif;
    transition: 0.2s all ease;
    font-weight: bold;
    label: button;
    &:hover {
      background: #bb3a3ac9;
      color: #fff;
    }
  `
};
const ContactItem = props => {
  return (
    <div className={styles.contactRoot}>
      <div className={styles.avatarRoot}>
        <svg className={styles.avatar} viewBox="0 0 32 32">
          <path d="M0 32v-3c0-4.484 5.649-6.179 13.099-6.862-1.636-1.014-2.92-3.864-3.589-6.14-0.003 0-0.006 0.002-0.010 0.002-0.068 0-1.5-1.791-1.5-4 0-1.938-0.138-3.554 1.007-3.92-0.001-0.027-0.007-0.053-0.007-0.080 0-2.457 1.271-4.61 3.187-5.859 0.495-1.235 2.004-2.141 3.813-2.141s3.318 0.906 3.813 2.141c1.916 1.249 3.187 3.402 3.187 5.859 0 0.027-0.006 0.053-0.007 0.080 1.145 0.366 1.007 1.982 1.007 3.92 0 2.209-1.588 4-1.5 4-0.004 0-0.007-0.002-0.010-0.002-0.669 2.275-1.953 5.126-3.589 6.14 7.45 0.683 13.099 2.315 13.099 6.862v3h-32z" />
        </svg>
      </div>
      <span className={styles.text}>
        {props.firstName} <strong>{props.lastName}</strong>
      </span>
      <span className={cx(styles.text, styles.company)}>{props.company}</span>
      <span className={styles.text}>
        <a className={styles.link} href={`tel:${props.phoneNumber}`}>
          {props.phoneNumber}
        </a>
      </span>
      <button className={styles.button} onClick={props.onBlock}>
        {props.isBlocked ? "Unblock" : "Block"}
      </button>
    </div>
  );
};

export default ContactItem;

ContactItem.defaultProps = {
  firstName: "First Name",
  lastName: "Last Name",
  phoneNumber: "122-345-654",
  isBlocked: false
};

ContactItem.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  company: PropTypes.string,
  phoneNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  isBlocked: PropTypes.bool,
  onBlock: PropTypes.func
};
