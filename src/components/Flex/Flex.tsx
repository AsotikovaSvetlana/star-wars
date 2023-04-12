import cn from 'classnames';
import { CSSProperties } from 'react';
import s from './Flex.module.scss';

interface FlexProps {
  direction: 'column' | 'row';
  align: 'ai-center';
  justify: 'jc-center';
  children: React.ReactNode;
  classNames?: CSSProperties;
}

export const Flex = ({
  direction,
  align,
  justify,
  children,
  classNames,
}: FlexProps): JSX.Element => {
  const flexProps = {
    className: cn(s.flex, s[direction], s[align], s[justify], classNames?.flex),
  };

  return <div {...flexProps}>{children}</div>;
};
