import Link from 'next/link';
import { ReactNode } from 'react';

type SocialsLinkProps = {
  href: string,
  icon: ReactNode
};

const SocialsLink = ({
  href,
  icon
}: SocialsLinkProps) => {
  return (
    <Link
      target="_blank"
      href={href}
      className="group w-15 tablet:w-12.5 sm:w-11 h-15 tablet:h-12.5 sm:h-11 p-4.5 tablet:p-[15px] sm:p-3.5 rounded-full grid place-content-center border border-grey-600 hover:border-lemon hover:rotate-[-15deg] [&>*]:hover:fill-lemon transition-all duration-300"
    >
      { icon }
    </Link>
  );
}

export default SocialsLink;
