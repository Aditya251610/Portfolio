const Nav = () => {
  return (
    <nav className="text-[#1B1918] p-8 flex-1 hidden sm:block">
      <div className="flex justify-between items-center text-xl text-center italic font-semibold">
        <p>Aditya Sharma</p>
        <p>Currently a Fresher<br />Full Stack Developer</p>
        <p>Based in Jharkhand<br />India</p>
        <p>
          <a href="#skills">Skills, </a>
          <a href="#projects">Projects, </a>
          <a href="#contact-me">Contact Me</a>
        </p>
      </div>
    </nav>
  )
}

export default Nav
