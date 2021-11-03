import s from './Section.module.css';

function Section(prop) {
    return <div>
        <h2 className={s.title}>{prop.title}</h2>
    </div>
}

export default Section;