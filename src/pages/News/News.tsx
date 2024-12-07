import { Fragment } from "react";
import { INewsResponse } from "../../types/news/newsType";
import { useNavigate } from "react-router-dom";
import useNews from "../../hooks/news/useNews";
import LoadingData from "../components/LoadingData";

const NewsPage = () => {
  // hooks
  const navigate = useNavigate();
  const { useFindAllNews } = useNews();
  const { data: news, loading } = useFindAllNews();

  // functions
  const renderNews = (element: INewsResponse, index: number) => {
    return (
      <Fragment key={index}>
        <div className="w-1/3 p-4 mobile:w-full">
          <div className="card">
            <img className="object-cover w-full h-64 rounded" src={element.image} alt={element.title} />
            <div className="card-body">
              <h3 className="text-xl font-bold">{element.title}</h3>
              <div className="mb-2 mt-2">{element.sub_title}</div>
              <button className="btn btn-primary" onClick={() => navigate(`/news/${element.id}`)}>
                Leia Mais
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  if (loading) return <LoadingData />;

  // render
  return (
    <div className="panel">
      <div className="flex flex-wrap w-full">{news.map(renderNews)}</div>
    </div>
  );
};

export default NewsPage;
