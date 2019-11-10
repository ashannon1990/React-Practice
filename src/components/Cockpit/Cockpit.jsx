import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        //Http request...
        // const timer = setTimeout(() => {
        //     alert('Saved data to cloud!')
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            // clearTimeout(timer);
            console.log('[Cockpit.jsx] cleanup work in useEffect')
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.jsx] 2nd useEffect');
        return () => {
            console.log('[Cockpit.jsx] cleanup work in 2nd useEffect');
        };
    })

    const assignedClasses = [];

    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>
                Toggle persons
            </button>
            <button onClick={props.login}>Log in</button>
        </div>
    )
}

export default React.memo(Cockpit);