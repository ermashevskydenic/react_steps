import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const OutputSteps = ({ stepsList, deleteStep }) => {
    // генерирование уникального значения
    const generateUnicString = () => {
        return uuidv4();
    };

    return (
        <div className="outputContainer">
            {stepsList.map((element) => (
                <div className="element" key={generateUnicString()}>
                    <div>{element.date}</div>
                    <div>{element.dist}</div>
                    <div onClick={() => deleteStep(element.date)}>X</div>
                </div>
            ))}
        </div>
    );
};

OutputSteps.defaultProps = {
    stepsList: [],
    deleteStep: () => {},
};

OutputSteps.propTypes = {
    stepsList: PropTypes.array,
    deleteStep: PropTypes.func,
};

export default OutputSteps;