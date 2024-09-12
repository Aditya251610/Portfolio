import { Link } from "react-router-dom"
import { portfolio } from "../constants"
import Card from "./Card"

const Projects = () => {
  return (
    <section className="flex flex-col justify-center items-center m-8 max-sm:m-2" id="projects">
      <h1 className="text-6xl font-bold max-sm:text-5xl">&lt;Projects /&gt;</h1>
      <div className="flex justify-between items-center gap-8 p-8 max-sm:flex-col max-sm:justify-center max-sm:p-4">
        {portfolio.slice(0,4).map((project) =>(
          <Card title={project.title} content={project.description} src={project.src} url={project.url} />
        ))}
      </div>
      <Link to='/project-page' className="ml-auto font-bold text-blue-500 underline mr-10"><p>Show More</p></Link>
    </section>
  )
}

export default Projects
