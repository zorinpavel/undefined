import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';

import css from './table.module.scss';

const Table = (props) => {
    const tableRef = useRef(null);

    const {
        cells, nowrap, align, valign, fontSize, view, className, style,
        height, width,
        ...rest
    } = props;

    let tableStyle;

    const [scroll, setScroll] = useState(false);

    const scrollBarWidth = 25;

    const onResize = () => {
        setScroll((width + scrollBarWidth) > tableRef.current.parentNode.clientWidth);
    };


    useEffect(() => {
        if(tableRef !== null) {
            onResize();
            window.addEventListener('resize', onResize);
        }

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, [tableRef]);

    if(width) {
        tableStyle = { minWidth: width + 'px' };
    }

    if(height) {
        tableStyle = { maxHeight: height + 'px' };
    }


    return (
        <div ref={tableRef}
                className={classNames(
                    css['wrapper'],
                    className,
                )}
                style={style}>

                <div {...rest}
                    className={classNames(
                        css.table,
                        (cells && css[`cell${cells}`]),
                        (align && css[`align-${align}`]),
                        (valign && !scroll && css[`valign-${valign}`]),
                        (fontSize && css[`font-${fontSize}`]),
                        (view && css[`view-${view}`]),
                        (nowrap && css.nowrap)
                    )}
                    style={tableStyle}
                >
                    {props.children}
                </div>
            </div>
    );
};


Table.propTypes = {
    cells: PropTypes.number,
    nowrap: PropTypes.bool,
    align: PropTypes.oneOf(['center', 'left', 'right']),
    valign: PropTypes.oneOf(['center', 'top']),
    fontSize: PropTypes.oneOf(['small', 'inherit', 'large']),
    view: PropTypes.oneOf(['compact']),
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object
};


Table.defaultProps = {
    style: {}
};


Table.Header = TableHeader;
Table.Row = TableRow;
Table.Cell = TableCell;

export { Table };
