import './skills.css';
export default function Skills({skills}) {
    return (
        <div className="skillsComponent"> 
            <h1>Skills</h1>
            <ul>
                {skills.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </div>
    );
}