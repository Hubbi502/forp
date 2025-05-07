
export default function VideoPlaceholder() {
  return (
    <div className="w-[80%] h-[90vh] bg-[#292929] rounded-3xl mt-10 flex justify-center items-center">
      <button className="w-16 h-16 rounded-full bg-[#a8a8a8] active:bg-[#8a8a8a] flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-play"
        >
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
      </button>
    </div>
  );
}
