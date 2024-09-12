import { skills } from "../constants"
import Card from "./Card"
import Marquee from "react-fast-marquee";

const Skills = () => {
  return (
    <section className="flex flex-1 flex-col justify-center items-center" id="skills">
      <h1 className="text-6xl max-sm:text-5xl font-semibold mb-6">&lt;Skills /&gt;</h1>
      <div className="flex max-sm:justify-center max-sm:flex-col max-sm:p-4 justify-between items-center gap-8 p-8">
        {skills.map((skill) =>(
          <Card src={skill.src} title={skill.title} content={skill.description} key={skill.id}  />
        ))}
      </div>
      <div className="flex flex-1 flex-col justify-center items-center w-full overflow-hidden">
        <h1 className="text-4xl font-semibold m-4">&lt;My TechStack /&gt;</h1>
        <Marquee className="flex flex-1 justify-between items-center w-1/2 max-sm:w-full">
          <i className="m-4 fa-brands fa-html5 fa-3x"></i>
          <i className="m-4 fa-brands fa-css3 fa-3x"></i>
          <i className="m-4 fa-brands fa-js fa-3x"></i>
          <i className="m-4 fa-brands fa-node-js fa-3x"></i>
          <img src="/assets/express.png" height={104} width={104} />
          <img src="/assets/mongodb.png" height={52} width={52} className="m-4" />
          <img src="/assets/postgresql.png" height={52} width={52} className="m-4" />
          <img src="/assets/appwrite.png" height={96} width={96} className="m-4" />
          <i className="m-4 fa-brands fa-react fa-3x"></i>
          <img src="/assets/nextjs.png" height={72} width={72} className="m-5" />
          <img src="/assets/ts.png" height={52} width={52} />
          <i className="fa-brands fa-bootstrap fa-3x m-4"></i>
          <img src="/assets/tailwind.png" height={96} width={96} />
          <i className="m-4 fa-brands fa-linux fa-3x"></i>
          <i className="fa-brands fa-git-alt m-4 fa-3x"></i>
          <i className="fa-brands fa-github m-4 fa-3x"></i>
          <i className="m-4 fa-brands fa-python fa-3x"></i>
        </Marquee>
      </div>
    </section>
  )
}

export default Skills
