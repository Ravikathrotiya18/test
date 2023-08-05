import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../app/counter/thirs';

const Fifteen = () => {
    const count = useSelector((state) => state.fifteen.value)
    const dispatch = useDispatch();

    return (
        <div>
            <div className="counter-div">
                <div className='counter'>{count}</div>
            </div>
            <div className="counter-button">
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>

            </div>
        </div>
    );
};

export default Fifteen;
