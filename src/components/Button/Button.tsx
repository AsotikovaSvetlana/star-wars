import { useMemo } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import s from './Button.module.scss';

interface ButtonProps {
  text: string | number;
  color: 'primary-black' | 'primary-yellow';
  size: 'sm' | 'md';
  onClick: () => void;
  href?: string;
  active?: boolean;
  disabled?: boolean;
}

export const Button = ({
  text,
  size,
  color,
  href,
  active,
  disabled,
  onClick,
}: ButtonProps): JSX.Element => {
  const buttonProps = {
    className: cn(s.button, s[color], s[size], {
      [s.active]: active,
      [s.disabled]: disabled,
    }),
  };

  const btnContent = useMemo(
    () => <>{text && <span className={s.button__text}>{text}</span>}</>,
    [text],
  );

  if (href) {
    return (
      <Link href={href} {...buttonProps}>
        {btnContent}
      </Link>
    );
  }

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      {...buttonProps}
    >
      {btnContent}
    </button>
  );
};
