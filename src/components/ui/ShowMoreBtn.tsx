type ShowMoreBtnProps = {
  isOpen: boolean,
  onClick: () => void
};

const ShowMoreBtn = ({
  onClick,
  isOpen
}: ShowMoreBtnProps) => {
  return (
    <button
      onClick={onClick}
      className="text-body text-grey-400 py-5 w-fit hover:text-white transition-colors duration-300"
    >
      {`Show ${isOpen ? 'less' : 'more'}`}
    </button>
  );
};

export default ShowMoreBtn;
