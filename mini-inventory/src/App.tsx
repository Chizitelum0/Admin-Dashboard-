
import { products, getInventorySummary,} from "./inventory";

import SummaryCard from "./components/SummaryCard";

function App() {
  const summary = getInventorySummary(products);

  return (
    <main>
      <h1>Inventory Dashboard</h1>

      <section className="summary-grid">
        <SummaryCard
          title="Total Products"
          value={summary.totalProducts}
          description="Products in inventory"
        />

        <SummaryCard
          title="Inventory Value"
          value={summary.totalInventoryValue}
          description="Total value of current stock"
        />

        <SummaryCard
          title="Low Stock"
          value={summary.lowStockCount}
          description="Products requiring attention"
        />
      </section>
    </main>
  );
}

export default App;
