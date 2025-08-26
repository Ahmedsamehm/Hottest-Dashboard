import useCalculation from "@/hooks/useCalculation";
import { useSearchParams, useRouter } from "next/navigation";

const usePagination = (fetchAction?: any, path?: string) => {
  "use memo";

  const { total } = useCalculation(fetchAction ?? []);

  const searchParams = useSearchParams();
  const router = useRouter();
  const page = Math.max(1, Number(searchParams.get("page")) || 1);
  const pageSize = 20;
  const totalPages = Math.ceil(total / pageSize);

  const handleIncrement = () => {
    if (page >= totalPages) return;
    const nextPage = page + 1;
    router.push(`/${path}?page=${nextPage}`);
  };

  const handleDecrement = () => {
    if (page <= 1) return;
    const prevPage = page - 1;

    if (prevPage === 1) {
      router.push(`${path}`);
    } else {
      router.push(`${path}?page=${prevPage}`);
    }
  };

  return { page, pageSize, handleIncrement, handleDecrement, totalPages };
};

export default usePagination;
