import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useMovements } from "@/business/hooks/useMovements"
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading"



export const MovementsPage = () => {

  const {data, isLoading, isError} = useMovements()


  const movements = data ?? []
  if(isLoading) return <CustomFullScreenLoading/>
  if(isError) return <p className="text-xl text-red-500 font-bold">Error cargando productos</p>

  return (
    <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Movimientos</h1>
          <p className="text-muted-foreground text-sm mt-1">Historial de entradas y salidas</p>
        </div>

        <Card className="dashboard-section border-0">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Todos los movimientos</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Producto</TableHead>
                  <TableHead className="text-xs">Tipo</TableHead>
                  <TableHead className="text-xs text-right">Stock Actual</TableHead>
                  <TableHead className="text-xs text-right">Stock Previo</TableHead>
                  <TableHead className="text-xs text-right">Stock Ingresado</TableHead>
                  <TableHead className="text-xs text-right">Fecha</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {movements.map((move) => (
                  <TableRow key={move._id}>
                    <TableCell className="text-sm font-medium">{move.product?.name ?? move.productSnapshot?.name }</TableCell>
                    <TableCell>
                      <Badge variant={move.type === "IN" ? "default" : "secondary"} className="text-xs capitalize">
                        {move.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-right">{move.newStock}</TableCell>
                    <TableCell className="text-sm text-right">{move.previousStock}</TableCell>
                    <TableCell className="text-sm text-right">{move.quantity}</TableCell>
                    <TableCell className="text-sm text-right text-muted-foreground">{new Date(move.createdAt).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
  )
}
