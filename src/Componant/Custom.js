import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { input } from '../app/counter/fourth';

const Custom = () => {
    const [val, setVal] = useState('');
    const dispatch = useDispatch();
    const count = useSelector((state) => state.random.value);

    return (
        <div>
            <div className="counter-div">
                <div className='counter'>{count}</div>
            </div>
            <input type="text" name="" id="" value={val} onChange={(e) => setVal(e.target.value)} />
            <button onClick={() => dispatch(input(parseInt(val)))}>add</button>
        </div>
    );
};

export default Custom;
