export interface DashboardResponse {
    stats:            Stats;
    lowStockProducts: LowStockProduct[];
    latestMovements:  LatestMovement[];
}

export interface LatestMovement {
    _id:           string;
    productName:   string;
    type:          string;
    quantity:      number;
    previousStock: number;
    newStock:      number;
    createdAt:     Date;
}

export interface LowStockProduct {
    _id:   string;
    name:  string;
    stock: number;
}

export interface Stats {
    totalProducts:  number;
    totalStock:     number;
    inventoryValue: number;
    todayMovements: number;
}
