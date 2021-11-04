import s from './Section.module.css';
import PropTypes from 'prop-types';

export default function Section({ children, title}) {
    return <div>
        <h2 className={s.title}>{title}</h2>
        {children}
    </div>
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element
};