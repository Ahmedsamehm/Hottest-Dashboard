import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent } from "react";

export type FormLabel = {
  label?: string;
  name?: string;
  type: string;
  control?: boolean;
  options?: string[];
  value?: string;
  icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  description?: string;
  checkBox?: { label: string; value: string; description?: string; icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>> }[];
};

export type SelectOption = {
  value: string;
  label: string;
};
