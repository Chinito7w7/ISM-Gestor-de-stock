import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface Props {
  categories: string[];
  value: string;
  onChange: (value: string) => void;
}

export const CategoryFilter = ({ categories, value, onChange }: Props) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full sm:w-45">
        <SelectValue placeholder="Categoría" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="all">Todas</SelectItem>

        {categories
          .filter(Boolean) // ignore empty entries just in case
          .map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};