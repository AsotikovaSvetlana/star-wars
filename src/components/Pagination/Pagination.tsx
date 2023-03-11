import { useRouter } from "next/router";
import cn from "classnames";
import s from "./Pagination.module.scss";
import usePagination from "./hooks/usePagination";
import { Button } from "@/src/components/Button";

type PaginationBtnProps = {
  size: "sm";
  color: "primary-black";
};

interface PaginationProps {
  total: number;
  category: string;
  buttons: PaginationBtnProps;
  margin: "mt-20" | "mt-30" | "mb-20";
}

export const Pagination = ({
  total,
  category,
  buttons,
  margin,
}: PaginationProps): JSX.Element => {
  const pagination = usePagination(total, category);
  const { asPath, push } = useRouter();

  const onChangePage = (id: number) => {
    if (id === 1) {
      push(`/${category}`);
    } else {
      push(`/${category}?page=${id}`);
    }
  };

  return (
    <div className={cn(s.pagination, s[margin])}>
      {pagination.length > 1 &&
        pagination.map(({ id, count, href }) => (
          <Button
            key={id}
            color={buttons.color}
            size={buttons.size}
            text={count}
            disabled={asPath === href}
            onClick={() => onChangePage(id)}
          />
        ))}
    </div>
  );
};
