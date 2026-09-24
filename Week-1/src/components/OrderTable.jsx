function OrderTable({ orders, search }) {
  return (
    <section className="panel orders-panel">
      <div className="section-heading">
        <div>
          <p className="eyebrow">TRANSACTIONS</p>
          <h2>Recent Orders</h2>
        </div>
        <button className="text-button">View all</button>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id}>
                  <td className="order-id">#{order.id}</td>
                  <td>
                    <div className="customer-cell">
                      <span className="table-avatar">{order.user.slice(0, 1)}</span>
                      <strong>{order.user}</strong>
                    </div>
                  </td>
                  <td>{order.product}</td>
                  <td>
                    <span className={`status-pill ${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="amount">{order.amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="empty-state">
                  No orders found for “{search}”.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default OrderTable;