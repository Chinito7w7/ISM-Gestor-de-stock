import type { Product } from "./product.interface";

export const MovementType = {
    Create: "CREATE",
    Delete: "DELETE",
    In: "IN",
    Out: "OUT",
} as const;

export type MovementType = typeof MovementType[keyof typeof MovementType];

export interface MovementResponse {
    id:           string;
    product:       Product | null;
    ownerId:         string;
    type:          MovementType;
    quantity:      number;
    previousStock: number;
    newStock:      number;
    createdAt:     Date;
    updatedAt:     Date;
}

