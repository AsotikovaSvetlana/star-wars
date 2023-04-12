import s from './DetailsText.module.scss';

interface DetailsTextProps {
  characteristic: string;
  value: string;
}

export const DetailsText = ({
  characteristic,
  value,
}: DetailsTextProps): JSX.Element => {
  const key = `${characteristic[0].toUpperCase()}${characteristic
    .slice(1)
    .replace('_', ' ')}`;

  return (
    <p className={s.text}>
      <span>{key}:</span> {value}
    </p>
  );
};
