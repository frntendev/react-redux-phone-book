import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addToBlackList } from "../../../actions";
import * as selector from "../../../selectors";
import BlackListPage from "../components/BlackListPage";

const mapStateToProps = state => ({
  blackListContacts: selector.getBlackListContacts(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addToBlackList
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(BlackListPage);