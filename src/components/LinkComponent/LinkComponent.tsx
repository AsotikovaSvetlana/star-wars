import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '@/src/context';
import { PosterType } from './types';
import { getPagePoster } from './utils/getPagePoster';

interface LinkComponentProps {
  href: string;
  children: React.ReactNode;
  classes?: string;
  isSetPoster?: boolean;
  poster?: PosterType;
  onClick?: () => void;
}

const LinkComponent = ({
  href,
  classes,
  children,
  poster,
  isSetPoster,
  onClick,
}: LinkComponentProps): JSX.Element => {
  const { setPoster } = useContext(AppContext);

  const handleLinkClick = () => {
    if (onClick) onClick();

    if (isSetPoster) {
      const pagePoster = getPagePoster(poster);
      setPoster(pagePoster);
    }
  };

  return (
    <Link href={href} className={classes} onClick={handleLinkClick}>
      {children}
    </Link>
  );
};

export { LinkComponent };
