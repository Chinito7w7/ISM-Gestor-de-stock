import type { Product } from "./product.interface";
export type MovementType = typeof MovementType[keyof typeof MovementType];

export const MovementType = {
    Create: "CREATE",
    Delete: "DELETE",
    In: "IN",
    Out: "OUT",
} as const;

export interface ProductSnapshot {
    name:     string;
    category: string;
}


export interface Movement {
    _id:string;
    productSnapshot?: ProductSnapshot;
    product:Product;
    owner:string;
    type:MovementType;
    quantity:number;
    previousStock:number;
    newStock:number;
    createdAt:Date;
    updatedAt:Date;
}

