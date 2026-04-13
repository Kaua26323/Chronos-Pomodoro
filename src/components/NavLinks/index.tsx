import { type LucideProps } from 'lucide-react';
import styles from './navLinks.module.css';

interface NavLinksProps {
  href: string;
  title: string;
  arialLabel: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
}

export function NavLinks({
  href,
  icon,
  title,
  onClick,
  arialLabel,
}: NavLinksProps) {
  const Icon = icon;
  return (
    <a
      href={`${href}`}
      className={styles.links}
      aria-label={arialLabel}
      title={title}
      onClick={onClick}
    >
      <Icon />
    </a>
  );
}
