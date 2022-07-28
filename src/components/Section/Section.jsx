import PropTypes from 'prop-types';
import styled from 'styled-components';
 
const Section = ({ title, children }) => {
    return (
        <SectionStyled>
            <h3>{title}</h3>
            {children}
        </SectionStyled>
        )
}

 Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
const SectionStyled = styled.section`
    padding-top: 30px;
    padding-bottom: 30px;
`
export default Section;