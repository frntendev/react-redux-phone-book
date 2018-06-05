import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  getContactsInfo,
  addToBlackList,
  changeSearchTerm
} from "../../../actions";
import * as selector from "../../../selectors";
import HomePage from "../components/HomePage";

const mapStateToProps = state => ({
  contactsInfo: state.contactsInfo,
  contactsByAlphabet: selector.getContactsByAlphabet(state),
  filteredContacts: selector.getFilteredContacts(state),
  showFiltered: selector.getShowFiltered(state),
  showAlphabet: selector.getShowAlphabet(state),
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getContactsInfo,
      addToBlackList,
      changeSearchTerm
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
