import React from 'react';

var HelloApp = (props) => {
        return (
                <div>
                        <h1>Akbar! React</h1>
                        <p>{props.message}</p>
                </div>
        )
}

export default HelloApp;