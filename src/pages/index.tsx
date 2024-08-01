import { useEffect, useState } from "react";
import BookCard from "@/components/book-card";
import Layout from "@/components/layout";
import { IBook } from "@/utils/types/books";
import { getBooks } from "@/utils/apis/books";
import Carausel from "@/components/ui/carausel";

export default function Index() {
  const [data, setData] = useState<IBook[]>([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    fetchData();
  }, [reload]);

  async function fetchData() {
    try {
      const response = await getBooks();
      setData(response.payload.datas);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Layout>
      <Carausel />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-5">
        {data.map((book) => (
          <BookCard key={book.id} data={book} navigate={`/books/${book.id}`} data-testid={`book-${book.id}`} />
        ))}
      </div>
    </Layout>
  );
}
