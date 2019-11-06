import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        //Http request...
        const timer = setTimeout(() => {
            alert('Saved data to cloud!')
        }, 1000);
        return () => {
            clearTimeout(timer);
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

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle persons
            </button>
        </div>
    )
}

export default Cockpit;