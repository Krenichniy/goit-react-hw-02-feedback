
import PropTypes from 'prop-types';
import{ListItem, ListText} from './Statistic.styled'
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    const stats = { good, neutral, bad, total };
    const hasValue = Object.values(stats).some(value => value);
    return (
        <>
            {hasValue ?
                (<ul>
                    {Object.keys(stats).map((key, index) => (
                        <ListItem key={index}>{key}:{stats[key]}</ListItem>
                    ))}
                    <ListItem key={stats.length}>Positive feedback:{positivePercentage}%</ListItem>
                </ul>) : (<ListText> There is no feedback</ListText>)}       
        </>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}


export default Statistics;