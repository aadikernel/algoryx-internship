import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StateCard from "./components/StateCard";
import OrderTable from "./components/OrderTable";
import ProfileCard from "./components/ProfileCard";
import Notifications from "./components/Notifications";

const orders = [
  { id: 1024, user: "Aadi", product: "Laptop", status: "Completed", amount: "₹45,000" },
  { id: 1023, user: "Rahul", product: "Arduino Kit", status: "Pending", amount: "₹2,500" },
  { id: 1022, user: "Karthik", product: "Calculator", status: "Completed", amount: "₹1,200" },
  { id: 1021, user: "Priya", product: "IoT Sensor", status: "Processing", amount: "₹3,800" },
  { id: 1020, user: "Naveen", product: "Raspberry Pi", status: "Completed", amount: "₹6,500" }
];

function App() {
  const [search, setSearch] = useState("");
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filteredOrders = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return orders;

    return orders.filter((order) =>
      [order.user, order.product, order.status, String(order.id)]
        .some((value) => value.toLowerCase().includes(query))
    );
  }, [search]);

  return (
    <div className="app-shell">
      <Sidebar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {sidebarOpen && (
        <button
          className="sidebar-overlay"
          aria-label="Close navigation"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="main-content">
        <Navbar
          search={search}
          setSearch={setSearch}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="dashboard-main">
          <section className="page-heading">
            <div>
              <p className="eyebrow">OVERVIEW</p>
              <h1>{activeItem}</h1>
              <p className="page-subtitle">
                Monitor your workspace, activity and recent orders.
              </p>
            </div>

            <div className="date-chip">September 2026</div>
          </section>

          <section className="stats-grid" aria-label="Dashboard statistics">
            <StateCard title="Total Users" value="1,250" change="+12.5%" icon="U" />
            <StateCard title="Revenue" value="₹85,000" change="+8.2%" icon="₹" />
            <StateCard title="Orders" value="320" change="+5.4%" icon="O" />
            <StateCard title="Conversion" value="7.8%" change="+1.8%" icon="%" />
          </section>

          <section className="content-grid">
            <OrderTable orders={filteredOrders} search={search} />
            <Notifications />
          </section>

          <section className="bottom-grid">
            <ProfileCard />
            <div className="quick-panel">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">WORKSPACE</p>
                  <h2>Quick Overview</h2>
                </div>
                <span className="status-dot">Live</span>
              </div>

              <div className="progress-item">
                <div className="progress-label">
                  <span>Project progress</span>
                  <strong>82%</strong>
                </div>
                <div className="progress-track">
                  <span style={{ width: "82%" }} />
                </div>
              </div>

              <div className="mini-metrics">
                <div>
                  <strong>24</strong>
                  <span>Tasks</span>
                </div>
                <div>
                  <strong>18</strong>
                  <span>Completed</span>
                </div>
                <div>
                  <strong>06</strong>
                  <span>Pending</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;