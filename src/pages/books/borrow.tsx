import Layout from "@/components/layout";
import { getBorrows } from "@/utils/apis/borrows";
import React, { useEffect, useState } from "react";
import { getProfile } from "@/utils/apis/users";
import { IBorrow } from "@/utils/types/borrows";
import { IUser } from "@/utils/types/users";
import BookCard from "@/components/book-card";

export default function Borrow() {
  const [data, setData] = useState<IUser>();
  const [borrows, setBorrows] = useState<IBorrow[]>([]);
  useEffect(() => {
    fetchData();
    fetchBorrows();
  }, []);

  async function fetchData() {
    try {
      const response = await getProfile();

      setData(response.payload);
    } catch (error) {
      alert(error);
    }
  }

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
          <h2 className="text-xl font-bold mb-4">Recently Borrowed Book</h2>
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
