import './App.css';
import Photo from './components/photo';
import BioData from './components/bioData';
import Education from './components/education';
import Experience from './components/experience';
import Skills from './components/skills';
import Hobbies from './components/hobbies';



function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "NodeJS", "Express", "MongoDB"];


  return (
    <div className="App">
      <Photo className="photoComponent" photo="https://www.w3schools.com/howto/img_avatar.png"/>
      <BioData className="bioDataComponent" name="Sohail Khan" age="25" email="sohailkhan@gmail.com" phone="03129692599" address="Kashmir Road, Saddar, Rawalpindi"/>
      <Education className="educationComponent" />
      <Experience className="experienceComponent" />
      
      <Skills  skills={skills}/>
      <Hobbies hobbies={["Cricket", "Football", "Coding", "Reading"]}/>
    </div>
  );
}

export default App;
