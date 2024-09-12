import { portfolio } from "../constants"
import Card from "./Card"

const ProjectPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-8 gap-8 max-sm:gap-4">
      <h1 className="text-bold text-6xl max-sm:text-5xl">&lt;Projects /&gt;</h1>
      <div className="grid grid-cols-4 max-sm:grid-cols-1 gap-8 p-8 max-sm:p-4">
        {portfolio.map((project) =>(
          <Card title={project.title} content={project.description} src={project.src} url={project.url} />
        ))}
      </div>
    </div>
  )
}

export default ProjectPage
