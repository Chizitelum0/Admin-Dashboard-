
export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stockQuantity: number;
  lowStockThreshold: number;
  isActive: boolean;
}

export const products: Product[] = [
  {
    id: "p001",
    name: "Rice 5kg",
    sku: "RIC-001",
    price: 8500,
    stockQuantity: 12,
    lowStockThreshold: 5,
    isActive: true,
  },
  {
    id: "p002",
    name: "Cooking Oil 1L",
    sku: "OIL-001",
    price: 3200,
    stockQuantity: 3,
    lowStockThreshold: 10,
    isActive: true,
  },
  {
    id: "p003",
    name: "Sugar 1kg",
    sku: "SUG-001",
    price: 1800,
    stockQuantity: 20,
    lowStockThreshold: 5,
    isActive: true,
  },
  {
    id: "p004",
    name: "Fresh Tomatoes 1.5kg",
    sku: "TOM-004",
    price: 2000,
    stockQuantity: 30,
    lowStockThreshold: 5,
    isActive: true,
  },
];


export function getLowStockProducts(
  products: Product[]
): Product[] {
  return products.filter(
    (product) =>
      product.stockQuantity <= product.lowStockThreshold
  );
}


export function getTotalInventoryValue(
  products: Product[]
): number {
  return products.reduce(
    (total, product) =>
      total + product.price * product.stockQuantity,
    0
  );
}


export function findProductBySku(
  products: Product[],
  sku: string
): Product | undefined {
  return products.find(
    (product) => product.sku === sku
  );
}

export interface InventorySummary {
  totalProducts: number;
  totalInventoryValue: number;
  lowStockCount: number;
}

export function getInventorySummary(
  products: Product[]
): InventorySummary {
  return {
    totalProducts: products.length,
    totalInventoryValue: getTotalInventoryValue(products),
    lowStockCount: getLowStockProducts(products).length,
  };
}