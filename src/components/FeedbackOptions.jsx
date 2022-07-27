import PropTypes from 'prop-types';
// import styled from 'styled-components';

const FeedbackOptions= ({options, onLeaveFeedback}) => { 
        return (
            <>
                {Object.keys(options).map((key, index) =>
                    (<button key={index} onClick={onLeaveFeedback}>{key}</button>))}
            </>
        )
}

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}
export default FeedbackOptions;