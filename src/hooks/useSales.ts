import { useState, useEffect } from 'react';

interface Sale {
  id: number;
  productId: number;
  quantity: number;
  totalPrice: number;
  date: string;
}

const useSales = () => {
  const [sales, setSales] = useState<Sale[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await fetch('/api/sales');
        if (!response.ok) {
          throw new Error('Failed to fetch sales data');
        }
        const data = await response.json();
        setSales(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchSales();
  }, []);

  const addSale = async (newSale: Omit<Sale, 'id'>) => {
    try {
      const response = await fetch('/api/sales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSale),
      });
      if (!response.ok) {
        throw new Error('Failed to add sale');
      }
      const addedSale = await response.json();
      setSales((prevSales) => [...prevSales, addedSale]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };

  return { sales, loading, error, addSale };
};

export default useSales;