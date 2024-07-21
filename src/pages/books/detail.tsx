import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "@/components/layout";

import { IBook } from "@/utils/types/books";
import { getDetailBook } from "@/utils/apis/books";
import { Badge } from "@/components/ui/badge";

const DetailBook = () => {
  const [data, setData] = useState<IBook>();
  const params = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await getDetailBook(+params.id_book!);

      setData(response.payload);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Layout>
      <div className=" flex justify-center pt-24">
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data?.title}</h5>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{data?.author}</h5>

            <Badge className="py-1 w-36 justify-center">{data?.category}</Badge>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data?.description}</p>
          </div>
        </a>
      </div>
    </Layout>
  );
};

export default DetailBook;

// <Layout>
// <div>
//   <div>
//     <p>{data?.id}</p>
//     <p>{data?.title}</p>
//     <p>{data?.author}</p>
//     <Badge className="py-1">{data?.category}</Badge>
//     <p>{data?.description}</p>
//   </div>
// </div>
// </Layout>
