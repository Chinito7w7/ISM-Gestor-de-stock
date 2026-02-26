import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress"
import { useProducts } from "@/business/hooks/useProducts";
import getStockPercentage from "@/lib/getStockPercentage";
import {Table} from "@/components/ui/table"
import {Badge} from "@/components/ui/badge"
import { useState } from "react";
import { SearchInput } from "@/business/components/SearchInput";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import { CustomTitle } from "@/business/components/CustomTitle";
import { SortSelect, type SortOption } from "@/business/components/SortSelect";
import { CategoryFilter } from "@/business/components/CategoryFilter";
import { currencyFormater } from "@/lib/currencyFormater";

export const InventoryPage = () => {
    const { data,isError,isLoading } = useProducts()
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState<SortOption>("price-desc");

    const products = data ?? [];
    const categories = [...new Set(products.map(product => product.category).sort())];
    const filteredProducts = products
    .filter((product) => {
        const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

        const matchesCategory =
        category === "all" || product.category === category;

        return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
        switch (sort) {
        case "price-desc":
            return b.price - a.price;
        case "price-asc":
            return a.price - b.price;
        case "stock-desc":
            return b.stock - a.stock;
        case "stock-asc":
            return a.stock - b.stock;
        default:
            return 0;
        }
    });

    if(isLoading) return <CustomFullScreenLoading/>
    if(isError) return <p className="text-xl text-red-500 font-bold">Error cargando productos</p>

  return (
    <div className="space-y-6">
        <CustomTitle title="Inventario" subtitle="Estado actual del inventario"/>
        <Card className="dashboard-section border-0">
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-3">
            <SearchInput
                value={search}
                onChange={setSearch}
                placeholder="Buscar producto..."
            />

            <CategoryFilter
                categories={categories}
                value={category}
                onChange={setCategory}
            />

            <SortSelect
                value={sort}
                onChange={setSort}
            />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Producto</TableHead>
                  <TableHead className="text-xs">Categoría</TableHead>
                  <TableHead className="text-xs">Precio</TableHead>
                  <TableHead className="text-xs text-right">Stock</TableHead>
                  <TableHead className="text-xs">Nivel</TableHead>
                  <TableHead className="text-xs">Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => {
                  const isLow = product.stock <= 5;
                  const isMedium = product.stock > 5 && product.stock < 20;
                  return (
                    <TableRow key={product._id}>
                      <TableCell className="text-sm font-medium">- {product.name}</TableCell>
                      <TableCell><Badge className="text-xs">{product.category}</Badge></TableCell>
                      <TableCell className="text-sm">{currencyFormater(product.price)}</TableCell>
                      <TableCell className="text-sm text-right">{product.stock}</TableCell>
                      <TableCell className="w-32">
                        <Progress value={getStockPercentage(product.stock)} className={`h-2 ${isLow ? "[&>div]:bg-destructive" : isMedium ? "[&>div]:bg-yellow-500" : "[&>div]:bg-green-500"}`} />
                      </TableCell>
                      <TableCell>
                        <Badge variant={isLow ? "destructive" : isMedium ? "warning" : "default"} className="text-xs">
                          {isLow ? "Bajo" : isMedium ? "Medio" : "Normal"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
  )
}
