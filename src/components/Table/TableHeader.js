import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './table.module.scss';


export const TableHeader = (props) => {
    const ref = useRef(null);

    const {
        color, sticky, wrap, valign,
        className, style,
        ...rest
    } = props;

    return (
        <div {...rest}
            ref={ref}
            className={classNames(
                css.row,
                css.th,
                (color && css[`color-${color}`]),
                (valign && css[`valign-${valign}`]),
                (sticky && css['sticky']),
                (wrap && css['wrap']),
                className,
            )}
            style={style}
        >
            {props.children}
        </div>
    );
};


TableHeader.propTypes = {
    valign: PropTypes.oneOf(['center', 'top']),
    wrap: PropTypes.bool,
    sticky: PropTypes.bool,
    color: PropTypes.oneOf(['dark', 'light']),
    className: PropTypes.string,
    style: PropTypes.object,
};


TableHeader.defaultProps = {
};
