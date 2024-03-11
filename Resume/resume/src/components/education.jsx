import '../components/education.css';
export default function Education({degree, institute, year}) {
    const education = [
        {
            degree: "SSC",
            institute: "Beaconhouse (Peshawar Road Campus)",
            year: "2018"
        },
        {
            degree: "Pre-Engineering",
            institute: "Excellence College",
            year: "2020"
        },
        {
            degree: "BSSE",
            institute: "NUML",
            year: "2025"
        }
    ];
    return (
        <div className="educationContainer">
            <table className='experienceTable'>
                <tr>
                    <th>Company</th>
                    <th>Position</th>
                    <th>Year</th>
                </tr>
                {education.map((exp, index) => 
                    <tr key={index}>
                        <td>{exp.institute}</td>
                        <td>{exp.degree}</td>
                        <td>{exp.year}</td>
                    </tr>
                )}
            </table>



            
        </div>
    );
}