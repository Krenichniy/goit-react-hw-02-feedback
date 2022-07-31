const { default: styled } = require('styled-components');

export const SectionStyled = styled.section`
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  padding: 15px;
  background: #aadaa7;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.h3`
  margin-top: 0;
  font-size: 18px;
  line-height: 1.33;
  letter-spacing: 0.09em;
  text-align: center;
`;
