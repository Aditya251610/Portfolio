const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-4 gap-4 p-4 max-sm:p-1" id="contact-me">
      <h1 className="text-6xl font-semibold max-sm:text-5xl">&lt;Contact Me /&gt;</h1>
      <p className="text-center text-xl max-sm:text-lg max-sm:p-1 p-4 w-1/2">
      If you have a project in mind or need assistance with your development needs, feel free to get in touch with me.
      Whether you need a sleek and responsive frontend, a robust backend solution, or a complete full stack development, I'm here to help.
      </p>
      <button className="bg-black rounded-xl p-4 text-[whitesmoke]"><a href="mailto:aditya.dev2516@gmail.com">Get In Touch</a></button>
    </div>
  )
}

export default Contact
