import type { LucideProps } from 'lucide-react';
import styles from './defaultButton.module.css';

type DefaultButtonProps = {
  arialLabel: string;
  color?: 'green' | 'red';
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >;
} & React.ComponentProps<'button'>;

export function DefaultButton({
  icon,
  arialLabel,
  color = 'green',
  ...props
}: DefaultButtonProps) {
  const Icon = icon;
  return (
    <>
      <button
        className={`${styles.button} ${styles[color]}`}
        aria-label={arialLabel}
        {...props}
      >
        <Icon />
      </button>
    </>
  );
}
