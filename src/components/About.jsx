const About = () => {
  return (
    <section className="flex flex-1 justify-between items-center p-8">
      <div className="text-2xl max-sm:text-xl">
        <p className="mb-4">Hey, I'm Aditya</p>
        <h1 className="text-6xl font-semibold max-sm:text-5xl">Full Stack <br />Developer</h1>
        <p className="mt-4">
        Passionate about crafting dynamic web applications with the MERN stack.
        Continuously exploring new technologies to deliver impactful digital experiences.
        </p>
      </div>
      <div className="flex justify-center items-center text-center max-sm:hidden">
        <img src="/assets/image1.webp" height={2000} width={2000} />
      </div>
    </section>
  )
}

export default About
