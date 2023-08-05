import React, { useState } from 'react';
import Five from './Five';
import Ten from './Ten';
import Fifteen from './Fifteen';
import Custom from './Custom';

const Main = () => {
    const [val, setVal] = useState("5");

    return (
        <div>
            <div className="main-div">
                <select name="Option" id="select" onChange={(event) => { setVal(event.target.value) }}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="Custom">Custom</option>
                </select>

            </div>
            {val === "5" && (
                <Five />
            )}
            {val === "10" && (
                <Ten />
            )}
            {val === "15" && (
                <Fifteen />
            )}
            {val === "Custom" && (
                <Custom />
            )}
        </div>
    );
};

export default Main;
