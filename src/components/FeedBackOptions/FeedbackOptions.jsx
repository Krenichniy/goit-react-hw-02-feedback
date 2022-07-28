import PropTypes from 'prop-types';
import styled from 'styled-components';

const FeedbackOptions= ({options, onLeaveFeedback}) => { 
        return (
            <>
                {Object.keys(options).map((key, index) =>
                    (<Button key={index} onClick={onLeaveFeedback}>{key}</Button>))}
            </>
        )
}

FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

const Button = styled.button`
  cursor: pointer;
  margin: 10px;
  background: transparent;
  width: 80px;
  padding: 15px;
  border: 1px solid lightblue;
  border-radius: 5px;
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #000;
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  }
`;


export default FeedbackOptions;