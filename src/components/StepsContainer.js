import InputData from './InputData';
import OutputSteps from './OutputSteps';
import { useState } from 'react';

const StepsContainer = () => {
    const [steps, setsteps] = useState([]);

    const handlerAddStep = (date = '', dist = 0) => {
        const searchIndex = steps.findIndex((element) => element.date === date);
        if (searchIndex !== -1) {
            const updateElement = {
                date,
                steps: Number(steps[searchIndex].dist) + Number(dist),
            };
            const tmpSteps = steps;
            tmpSteps.splice(searchIndex, 1, updateElement);
            setsteps([]);
            setsteps([...tmpSteps]);
            return;
        }
        setsteps((prev) => [...prev, { date, dist: Number(dist) }]);
    };

    const handlerDeleteStep = (value) => {
        const searchIndex = steps.findIndex((element) => element.date === value);
        const tmpSteps = steps;
        tmpSteps.splice(searchIndex, 1);
        setsteps([]);
        setsteps([...tmpSteps]);
    };

    return (
        <div className="wrapperContainer">
            <div className="contentContainer">
                <span className="headerElement">Дата (ДД.ММ.ГГ)</span>
                <span className="headerElement">Пройдено км</span>
                <span className="headerElement"></span>
            </div>
            <InputData addStep={handlerAddStep} />
            <div className="contentContainer">
                <span className="headerElement">Дата (ДД.ММ.ГГ)</span>
                <span className="headerElement">Пройдено км</span>
                <span className="headerElement">Действия</span>
            </div>
            <OutputSteps stepsList={steps} deleteStep={handlerDeleteStep} />
        </div>
    );
};

export default StepsContainer;