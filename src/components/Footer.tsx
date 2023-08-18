import IconCircleArrowUp from '@components/icons/IconCircleArrowUp';

const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="base-padding !py-2.5 flex justify-between items-center text-callout text-grey-400 bg-black border-t border-grey-800">
      <p>© 2023 Heapix. All Rights Reserved.</p>
      <button
        onClick={handleClick}
        className="group w-[35px] tablet:w-[30px] sm:w-[25px]"
      >
        <IconCircleArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
