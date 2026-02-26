import { useState } from "react";
import {useForm} from "react-hook-form"

import  { Button } from "@/components/ui/button"
import  { Card, CardHeader, CardContent } from "@/components/ui/card"
import  { Input } from "@/components/ui/input"
import  { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {Badge} from "@/components/ui/badge"
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import { useProducts } from "@/business/hooks/useProducts";

import { currencyFormater } from "@/lib/currencyFormater";


import { useDeleteProduct } from "@/business/hooks/useDeleteProduct";
import { useCreateProduct } from "@/business/hooks/useCreateProduct";
import { useUpdateProduct } from "@/business/hooks/useUpdateProduct";

import { CustomTitle } from "@/business/components/CustomTitle";
import { SearchInput } from "@/business/components/SearchInput";

import type { Product } from "@/business/interfaces/product.interface";
import { SortSelect, type SortOption } from "@/business/components/SortSelect"

import { Plus, Search,   Pencil, Trash2 } from "lucide-react"
import { CategoryFilter } from "@/business/components/CategoryFilter";

type ProductForm = {
  name: string;
  price: number;
  stock: number;
  category: string;
  description:string;
  newCategory?: string;
};

export const ProductsPage = () => {
    
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sort, setSort] = useState<SortOption>("price-desc");
    
    const { mutate: deleteProduct } = useDeleteProduct();
    const { mutate: createProduct} = useCreateProduct();
    const {mutate: updateProduct} = useUpdateProduct()
    
    
    
    const { data,isError,isLoading } = useProducts()
    
    const { register, handleSubmit, reset, setValue, watch } = useForm<ProductForm>();
    
    if(isLoading) return <CustomFullScreenLoading/>
    if(isError) return <p className="text-xl text-red-500 font-bold">Error cargando productos</p>



    const products = data ?? [];
    const categories = [...new Set(products.map(product => product.category).sort())];
    const selectedCategory = watch("category");

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

    //Manejar formulario



    const openCreate = () => {
        setEditingProduct(null);

        reset({
            name: "",
            price: 0,
            stock: 0,
            category: "",
        });

        setDialogOpen(true);
        };
    const openEdit = (product: Product) => {
        setEditingProduct(product);

        reset(product); // esto carga los datos en el form

        setDialogOpen(true);
        };

        const onSubmit = (data: ProductForm) => {
            let finalCategory: string;

            if (data.category === "__new__") {
            if (!data.newCategory?.trim()) {
                return; // o mostrar error
            }
            finalCategory = data.newCategory;
            } else {
            finalCategory = data.category;
            }

        const productPayload = {
            ...data,
            category: finalCategory,
        };

        if (editingProduct) {
            updateProduct(
            { ...productPayload, _id: editingProduct._id },
            { onSuccess: () => setDialogOpen(false) }
            );
        } else {
            createProduct(productPayload, {
            onSuccess: () => setDialogOpen(false),
            });
        }
        };
        

  return (
    <>
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <CustomTitle title='Productos' subtitle='Gestiona tu catálogo de productos'/>
                <Button onClick={openCreate}> 
                    <Plus className="w-4 h-4 mr-2" />
                    Nuevo producto
                </Button>
            </div>

        <Card className="dashboard-section shadow-xl border-0">
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
          <CardContent className="p-0 max-h-125 overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Nombre</TableHead>
                  <TableHead className="text-xs">Categoría</TableHead>
                  <TableHead className="text-xs text-right">Precio</TableHead>
                  <TableHead className="text-xs text-right">Stock</TableHead>
                  <TableHead className="text-xs text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => {
                    const isLow = product.stock <= 5;
                    const isMedium = product.stock > 5 && product.stock < 20;
                    return(
                  <TableRow key={product._id}>
                    <TableCell className="text-sm font-medium">- {product.name}</TableCell>
                    <TableCell><Badge  className="text-xs">{product.category}</Badge></TableCell>
                    <TableCell className="text-sm text-right">{currencyFormater(product.price)}</TableCell>
                    <TableCell className="text-right">
                        <Badge variant={isLow ? "destructive" : isMedium ? "warning" : "default"} className="text-xs">
                          <p className="text-white">{product.stock}</p>
                        </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => openEdit(product)}>
                          <Pencil className="w-4 h-4"/>
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive" onClick={() => deleteProduct(product._id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )})}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingProduct ? "Editar producto" : "Nuevo producto"}</DialogTitle>
          </DialogHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                <Label>Nombre</Label>
                <Input {...register("name", { required: true })} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label>Categoría</Label>
                    <Select
                    value={selectedCategory || ""}
                    onValueChange={(value) => setValue("category", value)}
                    >
                    <SelectTrigger>
                        <SelectValue placeholder="Seleccionar categoría" />
                    </SelectTrigger>

                    <SelectContent>
                        {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                            {category}
                        </SelectItem>
                        ))}

                        <SelectItem value="__new__">
                        <div className="flex items-center gap-2">
                            <Plus className="w-4 h-4" />
                            Añadir categoría
                        </div>
                        </SelectItem>
                    </SelectContent>
                    </Select>
                    {selectedCategory === "__new__" && (
                    <div className="grid gap-2">
                        <Label>Nueva categoría</Label>
                        <Input
                        placeholder="Ej: Electrónica"
                        {...register("newCategory")}
                        />
                    </div>
                    )}
                </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label>Precio</Label>
                    <Input type="number" min={0} {...register("price", { required: true })} />
                </div>

                <div className="grid gap-2">
                    <Label>Stock</Label>
                    <Input type="number" min={0} {...register("stock", { required: true })} />
                </div>
                </div>
            </div>

            <DialogFooter>
                <Button
                type="button"
                variant="secondary"
                onClick={() => setDialogOpen(false)}
                >
                Cancelar
                </Button>

                <Button type="submit">
                {editingProduct ? "Guardar cambios" : "Crear producto"}
                </Button>
            </DialogFooter>
            </form>
        </DialogContent>
      </Dialog>
    </>
  )
    
}
