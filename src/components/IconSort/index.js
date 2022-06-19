import React from 'react';
import classNames from 'classnames';
import { IconSortDown, IconSortUp } from '../Icon';
import css from './icon.module.scss';


export const IconSort = (props) => {
    const { fieldName, orderedBy, sortBy } = props;
    let orderedByField = fieldName;

    if(Array.isArray(fieldName))
        orderedByField = fieldName[0];

    return (
        orderedBy[orderedByField] === 'asc' ?
            <IconSortDown className={classNames(css.icon, css.active)} onClick={() => sortBy(fieldName, true)} /> :
            orderedBy[orderedByField] === 'desc' ?
                <IconSortUp className={classNames(css.icon, css.active)} onClick={() => sortBy(fieldName)} /> :
                <IconSortDown className={css.icon} onClick={() => sortBy(fieldName)} />
    );
};
