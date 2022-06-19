import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './table.module.scss';

export const TableCell = (props) => {
    const {
        colspan, nowrap, wrap, align, grow,
        className, style,
        ...rest
    } = props;

    const ref = useRef();


    return (
        <div {...rest}
            className={classNames(
                css.td,
                (grow && css.grow),
                (colspan && css[`colspan-${colspan}`]),
                (align && css[`align-${align}`]),
                (nowrap && css.nowrap),
                (wrap && css.wrap),
                className,
            )}
            style={style}
            ref={ref}
        >
            {props.children}
        </div>
    );
};


TableCell.propTypes = {
    colspan: PropTypes.number,
    nowrap: PropTypes.bool,
    wrap: PropTypes.bool,
    grow: PropTypes.bool,
    align: PropTypes.oneOf(['center', 'left', 'right']),
    className: PropTypes.string,
    style: PropTypes.object,
};


TableCell.defaultProps = {
};
