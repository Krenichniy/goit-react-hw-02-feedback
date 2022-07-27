
import  PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    const stats = { good, neutral, bad, total };
    const hasValue = Object.values(stats).some(value => value);
    return (
        <>
            <h2>Statistics</h2>
             
            {hasValue ?
                (<ul>
                    {Object.keys(stats).map((key, index) => (
                        <li key={index}>{key}:{stats[key]}</li>
                    ))}
                    <li key={stats.length}>Positive feedback:{positivePercentage}%</li>
                </ul>) : (<p> There is no feedback</p>)}       
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