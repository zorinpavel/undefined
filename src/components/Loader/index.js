import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { titles } from './titles';
import css from './loader.module.scss';


export const Loader = (props) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setOpacity(1);
    }, []);

    return (
        <div className={classNames(css.wrapper, (props.inline && css.inline))} style={{ opacity }}>
            <div className={css.bubbles}>
                <span className={css['bubbles--blue']}></span>
                <span className={css['bubbles--red']}></span>
                <span className={css['bubbles--violet']}></span>
                <span className={css['bubbles--yellow']}></span>
            </div>
            <p className={css.title}>
                {
                    props.title ||
                    titles[(Math.floor(Math.random() * titles.length))]
                }
            </p>
        </div>
    );
};
