import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export type SortOption =
  | "price-desc"
  | "price-asc"
  | "stock-desc"
  | "stock-asc";

interface Props {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export const SortSelect = ({ value, onChange }: Props) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full sm:w-52">
        <SelectValue placeholder="Ordenar por" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
        <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
        <SelectItem value="stock-desc">Stock: mayor a menor</SelectItem>
        <SelectItem value="stock-asc">Stock: menor a mayor</SelectItem>
      </SelectContent>
    </Select>
  );
};