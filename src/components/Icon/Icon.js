import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './icon.module.scss';


export const Icon = (props) => {
    const {
        size, view, disabled, checked, onClick, button,
        className, style, viewBox,
        ...rest
    } = props;

    return (
        <svg
            viewBox={viewBox}
            className={classNames(
                css[view],
                css[size],
                (disabled && css.disabled),
                ((onClick || button) && css.action),
                className,
            )}
            onClick={!disabled ? onClick : null}
            style={style}
            {...rest} >
            {props.children}
            {
                checked &&
                <circle cx="21" cy="3" r="3" className={css.badge} />
            }
        </svg>
    );
};


Icon.propTypes = {
    view: PropTypes.oneOf(['inherit', 'primary', 'text-primary', 'secondary', 'text-secondary']),
    size: PropTypes.oneOf(['small', 'medium', 'default', 'large']),
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    button: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string,
    viewBox: PropTypes.string,
};


Icon.defaultProps = {
    view: 'inherit',
    size: 'default',
    viewBox: '0 0 24 24'
};
