export default function IngredientsCard() {
  return (
    <div className="w-[12rem] h-auto flex flex-col items-center text-center mx-5">
      {/* image placeholder */}
      <div className="w-full h-[12rem] bg-[#292929] rounded-3xl " />
      
      {/* text content */}
      <h3 className="mt-5 text-[#ffffff80] text-[1.30rem] ">Ingredients name</h3>
      <p className="mt-2 text-[#ffffff90] break-words px-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint earum inventore voluptatem ratione, quidem iusto?
      </p>
    </div>
  )
}
