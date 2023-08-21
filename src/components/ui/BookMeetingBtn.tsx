import Link from "next/link";

const BookMeetingBtn = () => {
  return (
    <Link
      href="https://google.com"
      target="_blank"
      className="text-center group w-full px-3.75 pt-[90px] md:pt-[60px] tablet:pt-[70px] pb-[110px] md:pb-[90px] sm:pb-[80px] flex flex-col items-center border-t border-grey-800 hover:bg-lemon transition-colors duration-300"
    >
      <div className="text-body text-grey-400 group-hover:text-black">
        Explore how AI solutions can optimize your business
      </div>
      <h1 className="pb-1 border-b-2 border-lemon group-hover:text-black group-hover:border-black">
        Book a meeting
      </h1>
    </Link>
  );
};

export default BookMeetingBtn;
