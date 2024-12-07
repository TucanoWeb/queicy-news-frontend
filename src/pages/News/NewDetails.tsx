import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { INewsResponse } from "../../types/news/newsType";
import useNews from "../../hooks/news/useNews";

const NewDetailsPage = () => {
  // hooks
  const { idnews } = useParams();
  const { findOneNews } = useNews();

  useEffect(() => {
    const fetchNews = async () => {
      await findOneNews(Number(idnews)).then((data) => setNewsData(data));
    };

    fetchNews();
  }, [idnews]);

  // states
  const [news, setNewsData] = useState<INewsResponse>();

  console.log(news);

  // render
  return (
    <div className="panel">
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <img src={news?.image} alt={news?.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800">{news?.title}</h1>
            <p className="text-sm text-gray-500 mt-2">{news?.sub_title}</p>
            <p className="text-sm text-gray-400 mt-1">
              Postado em {new Date(news?.createdAt as string).toLocaleDateString()} por{" "}
              <span className="font-medium text-gray-600">{news?.user.name}</span>
            </p>
            <div className="mt-4 text-gray-700 space-y-4">
              {news?.text.split("\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDetailsPage;
