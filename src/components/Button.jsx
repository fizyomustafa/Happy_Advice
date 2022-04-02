import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';

function App({onClick}) {
    const [state, setState] = useState('idle');

    
    const onClickHandler = () => {
        onClick()
        setState('loading');
        setTimeout(() => {
            setState('success');
        }, 4000);}
    

    return (
        <ReactiveButton
            buttonState={state}
            color={'light'}
            animation={true}
            onClick={(e) => onClickHandler()}
            rounded={true}
            outline={true}
            shadow={true}
            idleText={'shuffle'}
            loadingText={"loading"}
            successText={"shuffle"}
            className={'class1 class2'}
        />
    );
}

export default App;