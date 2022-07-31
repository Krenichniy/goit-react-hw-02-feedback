import PropTypes from 'prop-types';
import {Button, Wrapper} from './FeedBackOptions.styled'

const FeedbackOptions= ({options, onLeaveFeedback}) => { 
        return (
            <>
                <Wrapper>
                {Object.keys(options).map((key, index) =>
                    (<Button key={index} onClick={onLeaveFeedback}>{key}</Button>))}
                </Wrapper>
            </>
        )
}

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}




export default FeedbackOptions;