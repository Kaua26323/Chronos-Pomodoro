import styles from './defaultInput.module.css';

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  id,
  labelText,
  type,
  ...props
}: DefaultInputProps) {
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {labelText}
      </label>
      <input id={id} type={type} className={styles.input} {...props} />
    </>
  );
}
