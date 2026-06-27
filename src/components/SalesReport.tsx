import React, { useEffect, useState } from 'react';
import { useSales } from '../hooks/useSales';

const SalesReport: React.FC = () => {
  const { salesData, fetchSalesData } = useSales();
  const [totalSales, setTotalSales] = useState(0);

  useEffect(() => {
    fetchSalesData();
  }, [fetchSalesData]);

  useEffect(() => {
    const total = salesData.reduce((acc, sale) => acc + sale.amount, 0);
    setTotalSales(total);
  }, [salesData]);

  return (
    <div>
      <h2>Sales Report</h2>
      <h3>Total Sales: GHS {totalSales.toFixed(2)}</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Product</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale) => (
            <tr key={sale.id}>
              <td>{new Date(sale.date).toLocaleDateString()}</td>
              <td>{sale.productName}</td>
              <td>GHS {sale.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesReport;