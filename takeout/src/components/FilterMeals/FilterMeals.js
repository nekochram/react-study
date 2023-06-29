import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import classes from './FilterMeals.module.css';

const FilterMeals = (props) => {
    const inputChangeHandler = event =>{
        const keyWord=event.target.value
        props.filterMethod(keyWord)
    }
    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input
                    className={classes.SearchInput}
                    type="text"
                    placeholder={"请输入关键字"}
                    onChange={inputChangeHandler}/>
                <FontAwesomeIcon
                    className={classes.SearchIcon}
                    icon={faSearch}/>
            </div>
        </div>
    );
};

export default FilterMeals;
