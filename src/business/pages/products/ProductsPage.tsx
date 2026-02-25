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
import { Plus, Search,   Pencil, Trash2 } from "lucide-react"
import {Badge} from "@/components/ui/badge"
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";
import { useProducts } from "@/business/hooks/useProducts";
import { cn } from "@/lib/utils";
import { currencyFormater } from "@/lib/currencyFormater";

import { useDeleteProduct } from "@/business/hooks/useDeleteProduct";
import { useState } from "react";

import {useForm} from "react-hook-form"
import type { Product } from "@/business/interfaces/product.interface";
import { useCreateProduct } from "@/business/hooks/useCreateProduct";
import { useUpdateProduct } from "@/business/hooks/useUpdateProduct";

export const ProductsPage = () => {
    
    const [dialogOpen, setDialogOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    
    
    const { mutate: deleteProduct } = useDeleteProduct();
    const { mutate: createProduct} = useCreateProduct();
    const {mutate: updateProduct} = useUpdateProduct()
    
    
    
    const { data,isError,isLoading } = useProducts()
    
    const { register, handleSubmit, reset, setValue, watch } = useForm<Product>();
    
    if(isLoading) return <CustomFullScreenLoading/>
    if(isError) return <p className="text-xl text-red-500 font-bold">Error cargando productos</p>



    const products = data ?? [];
    const categories = [...new Set(products.map(product => product.category))];
    const selectedCategory = watch("category");
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

    const onSubmit = (data: Product) => {
        if (editingProduct) {
            updateProduct(
            { ...data, _id: editingProduct._id },
            {
                onSuccess: () => {
                setDialogOpen(false);
                },
            }
            );
        } else {
            createProduct(data, {
            onSuccess: () => {
                setDialogOpen(false);
            },
            });
        }
        };
  return (
    <>
        <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Productos</h1>
            <p className="text-muted-foreground text-sm mt-1">Gestiona tu catálogo de productos</p>
          </div>

          {/* onClick={openCreate} */}
          <Button onClick={openCreate}> 
            <Plus className="w-4 h-4 mr-2" />
            Nuevo producto
          </Button>
        </div>

        <Card className="dashboard-section shadow-xl border-0">
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Buscar producto..." className="pl-9"/>
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-45">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                    {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                        {category}
                    </SelectItem>
                    ))}
                </SelectContent>
              </Select>
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
                {products.map((product) => (
                  <TableRow key={product._id}>
                    <TableCell className="text-sm font-medium">- {product.name}</TableCell>
                    <TableCell><Badge  className="text-xs">{product.category}</Badge></TableCell>
                    <TableCell className="text-sm text-right">{currencyFormater(product.price)}</TableCell>
                    <TableCell className="text-right">
                      <Badge className={cn(product.stock <= 5 ? "bg-red-400" : "bg-white")}>
                        <p className="text-black">{product.stock}</p>
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
                ))}
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
                        onValueChange={(value) => setValue("category", value)}
                        value={selectedCategory || ""}
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
                </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                    <Label>Precio</Label>
                    <Input type="number" {...register("price", { required: true })} />
                </div>

                <div className="grid gap-2">
                    <Label>Stock</Label>
                    <Input type="number" {...register("stock", { required: true })} />
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
