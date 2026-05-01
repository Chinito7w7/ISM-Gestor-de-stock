
import { Package, AlertTriangle, DollarSign, ArrowLeftRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

import { useDashboard } from "@/business/hooks/useDashboard";
import { CustomFullScreenLoading } from "@/components/custom/CustomFullScreenLoading";




export const DashboardPage = () => {

  const {data, isError,isLoading} = useDashboard()

  const statistics = data

  if(isLoading) return <CustomFullScreenLoading/>
  if(isError) return <p className="text-xl text-red-500 font-bold">Error cargando productos</p>
  return (
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">Resumen general de tu negocio</p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* {metrics.map((m) => (
            <div key={m.label} className="metric-card animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{m.label}</p>
                  <p className="text-2xl font-bold text-foreground mt-1">{m.value}</p>
                </div>
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-muted">
                  <m.icon className={`w-5 h-5 ${m.color}`} />
                </div>
              </div>
            </div>
          ))} */}
        </div>

        {/* Chart + Low stock */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Chart */}
          <Card className="lg:col-span-2 dashboard-section border-0">
            <CardHeader>
              <CardTitle className="text-base font-semibold">Actividad de inventario</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <ResponsiveContainer width="100%" height={280}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                      fontSize: 13,
                    }}
                  />
                  <Legend />
                  <Bar dataKey="entradas" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="salidas" fill="hsl(var(--chart-secondary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer> */}
            </CardContent>
          </Card>

          {/* Low stock */}
          <Card className="dashboard-section border-0">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive" />
                <CardTitle className="text-base font-semibold">Bajo stock</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-xs">Producto</TableHead>
                    <TableHead className="text-xs text-right">Stock</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {statistics?.lowStockProducts.map((product) => (
                    <TableRow key={product._id}>
                      <TableCell className="text-sm font-medium">{product.name}</TableCell>
                      <TableCell className="text-right">
                        <Badge variant="destructive" className="text-xs">
                          {product.stock}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Recent movements */}
        <Card className="dashboard-section border-0">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Últimos movimientos</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-xs">Producto</TableHead>
                  <TableHead className="text-xs">Tipo</TableHead>
                  <TableHead className="text-xs text-right">Cantidad</TableHead>
                  <TableHead className="text-xs text-right">Fecha</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {statistics?.latestMovements.map((movement) => (
                  <TableRow key={movement._id}>
                    <TableCell className="text-sm font-medium">{movement.productName}</TableCell>
                    <TableCell>
                      <Badge variant={movement.type === "entrada" ? "default" : "secondary"} className="text-xs capitalize">
                        {movement.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-right">{movement.quantity}</TableCell>
                    <TableCell className="text-sm text-right text-muted-foreground">{new Date(movement.createdAt).toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
  );
}