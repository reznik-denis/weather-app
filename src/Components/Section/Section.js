import s from './Section.module.css';

function Section({ children, title}) {
    return <div>
        <h2 className={s.title}>{title}</h2>
        {children}
    </div>
}

export default Section;