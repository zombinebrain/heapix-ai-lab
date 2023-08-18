import SocialsLink from '@components/ui/SocialsLink';
import IconBehance from '@icons/IconBehance';
import IconInstagram from '@icons/IconInstagram';
import IconLinkedIn from '@icons/IconLinkedIn';

export enum SOCIALS_IDS {
  INSTAGRAM = "INSTAGRAM",
  LINKEDIN = "LINKEDIN",
  BEHANCE = "BEHANCE"
}

const SOCIALS_ICONS = Object.freeze({
  [SOCIALS_IDS.BEHANCE]:  <IconBehance />,
  [SOCIALS_IDS.INSTAGRAM]: <IconInstagram />,
  [SOCIALS_IDS.LINKEDIN]: <IconLinkedIn />
});

type SocialsProps = {
  links?: Array<{ id: SOCIALS_IDS, href: string }>
};

const defaultLinks = Object.freeze([
  {
    id: SOCIALS_IDS.BEHANCE,
    href: 'https://www.behance.net/heapix-design'
  },
  {
    id: SOCIALS_IDS.INSTAGRAM,
    href: 'https://www.instagram.com/heapix/'
  },
  {
    id: SOCIALS_IDS.LINKEDIN,
    href: 'https://www.linkedin.com/company/heapix/mycompany/'
  }
]);

const Socials = ({
 links = [...defaultLinks]
}: SocialsProps) => {
  return (
    <div className="flex sm:space-x-4">
      {
        links?.map(link => (
          <SocialsLink
            href={link.href}
            icon={SOCIALS_ICONS[link.id]}
            key={link.id}
          />
        ))
      }
    </div>
  );
};

export default Socials;
