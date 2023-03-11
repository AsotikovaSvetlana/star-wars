import { useState, useEffect } from "react";
import { initPaginationData } from "../utils/initPaginationData";
import { PaginationItem } from "@/src/types";

export default function usePagination(total: number, category: string) {
  const [pagination, setPagination] = useState<PaginationItem[]>([]);

  useEffect(() => {
    const paginationData = initPaginationData(total, category);
    setPagination(paginationData);
  }, []);

  return pagination;
}
