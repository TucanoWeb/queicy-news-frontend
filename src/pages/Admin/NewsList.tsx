import { useState } from "react";

import IconNotesEdit from "../../components/Icon/IconNotesEdit";
import IconTrash from "../../components/Icon/IconTrash";
import IconPlus from "../../components/Icon/IconPlus";
import LoadingData from "../components/LoadingData";
import AlertDeleteNews from "../components/AlertDeleteNews";
import { useNavigate } from "react-router-dom";
import useNews from "../../hooks/news/useNews";

const QuestionsPage = () => {
  // hooks
  const navigate = useNavigate();
  const { useFindAllNews } = useNews();
  const { data: news, loading, refresh } = useFindAllNews();

  const [params, setParams] = useState<{ id: number }>({ id: 0 });
  const [showDelete, setShowDelete] = useState<boolean>(false);

  if (loading) return <LoadingData />;

  // reset params
  if (!showDelete && params.id) setParams({ id: 0 });

  return (
    <div className="panel">
      {showDelete && <AlertDeleteNews params={params} setShowDelete={setShowDelete} refresh={() => refresh()} />}
      <div className="min-h-screen p-6">
        <div className="mx-auto">
          <div className="grid grid-cols-2">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Notícias</h1>
            <div className="flex items-center justify-end">
              <button className="btn btn-primary justify-end" onClick={() => navigate("/admin/news-create")}>
                <IconPlus className="mr-2" /> Criar Notícia
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-auto">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold">ID</th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold">Título</th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold">Subtítulo</th>
                  <th className="px-4 py-2 text-center text-gray-600 font-semibold">Ações</th>
                </tr>
              </thead>
              <tbody>
                {news.map((news) => (
                  <tr key={news.id} className="border-b hover:bg-gray-100">
                    <td className="px-4 py-2">{news.id}</td>
                    <td className="px-4 py-2 min-w-[350px]">{news.title}</td>
                    <td className="px-4 py-2 min-w-[350px]">{news.sub_title}</td>
                    <td className="px-4 py-2 text-center grid grid-cols-2 gap-2 mobile:flex max-w-[350px]">
                      <button className="btn btn-success" onClick={() => navigate(`/admin/news-edit/${news.id}`)}>
                        <IconNotesEdit className="mr-2" />
                        Editar
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          setParams({ id: news.id });
                          setShowDelete(true);
                        }}
                      >
                        <IconTrash className="mr-2" />
                        Deletar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
