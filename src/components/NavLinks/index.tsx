import { type LucideProps } from 'lucide-react';
import styles from './navLinks.module.css';

interface NavLinksProps {
  href: string;
  title: string;
  arialLabel: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
}

export function NavLinks({ href, icon, title, arialLabel }: NavLinksProps) {
  const Icon = icon;
  return (
    <a
      href={`/${href}`}
      className={styles.links}
      aria-label={arialLabel}
      title={title}
    >
      <Icon />
    </a>
  );
}
