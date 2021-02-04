import PropTypes from "prop-types";
import withForm from "../../../HOC/withForm";

const SendMessage = (props) => {
  const {renderForm, callback} = props;
  return renderForm(callback);
};
SendMessage.propTypes = {
  renderForm: PropTypes.func.isRequired,
  callback: PropTypes.func.isRequired,
};
const SendMessageWrapped = withForm(SendMessage);
export {
  SendMessageWrapped,
};
