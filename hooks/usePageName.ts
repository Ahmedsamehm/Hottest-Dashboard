import { usePathname } from "next/navigation";

const usePageName = () => {
  const pathname = usePathname();
  const pageName = pathname.split("/").pop();
  return { pageName };
};

export default usePageName;
