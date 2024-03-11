import './hobbies.css';
export default function Hobbies({hobbies}) {
    return (
        <div className="hobbiesComponent" >
            <h1>Hobbies</h1>
            <ul>
                {hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
            </ul>
        </div>
    );
}