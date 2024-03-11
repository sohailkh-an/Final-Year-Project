import './experience.css';
export default function Experience() {
    const experience = [
        {
            company: "VuckoCo",
            position: "Software Engineer",
            year: "2023"
        },
        {
            company: "Nausal Technologies",
            position: "Product Manager",
            year: "2022"
        },
        {
            company: "Google LLC",
            position: "DevOps",
            year: "2023"
        }
    ];
    return (
        <div className="experienceContainer">
            <table className='experienceTable'>
                <tr>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Year</th>
                </tr>
                {experience.map((exp, index) => 
                    <tr key={index}>
                        <td>{exp.company}</td>
                        <td>{exp.position}</td>
                        <td>{exp.year}</td>
                    </tr>
                )}
            </table>
            
        </div>
    );
}