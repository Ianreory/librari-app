import Layout from "@/components/layout";
import { getBorrows } from "@/utils/apis/borrows";
import { useEffect, useState } from "react";
import { IBorrow } from "@/utils/types/borrows";
import BookCard from "@/components/book-card";

export default function Borrow() {
  const [borrows, setBorrows] = useState<IBorrow[]>([]);

  useEffect(() => {
    fetchBorrows();
  }, []);

  async function fetchBorrows() {
    try {
      const response = await getBorrows();
      setBorrows(response.payload.datas);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Layout>
      <div className="mt-12 space-y-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Recently Borrowed Books</h2>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {borrows.map((borrow) => (
              <BookCard key={borrow.id} data={borrow.book} navigate="#" data-testid={`book-${borrow.id}`} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
