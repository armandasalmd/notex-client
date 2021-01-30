import { useEffect } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removeMessage } from "@actions/messageActions";

import { message } from "antd";

const Message = (props) => {
    useEffect(() => {
        if (props.message) {
            const { messageQueue } = props.message;
    
            for (var item of messageQueue) {
                switch (item.type) {
                    case "success":
                        message.success(item.text);
                        break;
                    case "error":
                        message.error(item.text);
                        break;
                    case "warn":
                    case "warning":
                        message.warn(item.text);
                        break;
                    case "info":
                    default:
                        message.info(item.text);
                        break;
                }
            }
    
            props.removeMessage(messageQueue.map(item => item.id));
        }
    }, [props]);
    
    return null;
};

Message.propTypes = {
    removeMessage: PropTypes.func.isRequired,
    message: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    message: state.message
});

export default connect(mapStateToProps, { removeMessage })(Message);
