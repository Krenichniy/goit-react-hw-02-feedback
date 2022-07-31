import PropTypes from 'prop-types';
import {SectionStyled, Header } from './Section.styled'
 
const Section = ({ title, children }) => {
    return (
        <SectionStyled>
            <Header>{title}</Header>
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

export default Section;