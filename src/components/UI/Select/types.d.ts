export interface Option {
  id: number;
  label: string;
  value: string;
}

export interface SelectProps {
  placeholder?: string;
  data?: Option[];
}
