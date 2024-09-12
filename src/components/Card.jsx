const Card = ({title, content, src, url}) => {
  return (
    <div className="bg-[#d3d3d3] shadow-xl rounded-2xl p-8 gap-4 flex flex-1 flex-col justify-center items-center">
      <img src={src} height={100} width={600} className="rounded-xl" />
      <h1 className="text-2xl max-sm:text-xl justify-start items-start mr-auto font-semibold">&lt;{title} /&gt;</h1>
      <p>{content}</p>
      {url && (
        <a className="ml-auto font-semibold underline hover:text-blue-500 transition" href={url}>Explore <i className="fa-solid fa-arrow-up-right-from-square m-2"></i></a>
      )}
    </div>
  )
}

export default Card
