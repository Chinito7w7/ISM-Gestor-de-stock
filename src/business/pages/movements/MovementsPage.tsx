import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"


export const MovementsPage = () => {
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
                  <TableHead className="text-xs text-right">Cantidad</TableHead>
                  <TableHead className="text-xs">Usuario</TableHead>
                  <TableHead className="text-xs text-right">Fecha</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* {movements.map((m) => (
                  <TableRow key={m.id}>
                    <TableCell className="text-sm font-medium">{m.productName}</TableCell>
                    <TableCell>
                      <Badge variant={m.type === "entrada" ? "default" : "secondary"} className="text-xs capitalize">
                        {m.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-right">{m.quantity}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{m.user}</TableCell>
                    <TableCell className="text-sm text-right text-muted-foreground">{m.date}</TableCell>
                  </TableRow>
                ))} */}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
  )
}
