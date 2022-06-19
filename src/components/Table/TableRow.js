import React  from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import css from './table.module.scss';


export const TableRow = (props) => {
    const {
        valign, align, sticky,
        className, style, noHover,
        disabled, dataIndex,
        ...rest
    } = props;

    return (
        <div {...rest}
            className={classNames(
                css.row,
                (noHover && css['noHover']),
                (align && css[`align-${align}`]),
                (sticky && css['sticky']),
                className,
                (disabled && css['disabled']),
            )}
            style={style} 
        >
            {props.children}
        </div>
    );
};


TableRow.propTypes = {
    sticky: PropTypes.bool,
    valign: PropTypes.oneOf(['center', 'top']),
    align: PropTypes.oneOf(['center', 'left', 'right']),
    className: PropTypes.string,
    style: PropTypes.object,
    noHover: PropTypes.bool
};


TableRow.defaultProps = {
    noHover: false
};
