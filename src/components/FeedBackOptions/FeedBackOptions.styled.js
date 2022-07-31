const { default: styled } = require('styled-components');
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 10px;
  background: #764a4a24;
  width: 80px;
  padding: 15px;
  border: 1px solid lightblue;
  border-radius: 5px;
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: #000;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 1.3;
  letter-spacing: 0.05em;
  text-transform: capitalize;
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
