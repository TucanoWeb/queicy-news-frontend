import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useNews from "../../hooks/news/useNews";
import { INewsPayload } from "../../types/news/newsType";
import { useSelector } from "react-redux";
import { IRootState } from "../../store";

const CreateNewsPage = () => {
  // hooks
  const navigate = useNavigate();
  const { createNews } = useNews();
  const idUser = useSelector((state: IRootState) => state.userConfig.id);

  // State for the new news entry
  const [news, setNews] = useState<INewsPayload>({
    title: "",
    id_user: Number(idUser),
    sub_title: "",
    text: "",
    image: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNews((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNews((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createNews(news)
      .then(() => alert("Notícia criada com sucesso!"))
      .catch((e) => alert("Erro ao criar a notícia: " + e.message))
      .finally(() => navigate("/admin/news"));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Criar Notícia</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
              Título
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={news.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="sub_title">
              Subtítulo
            </label>
            <input
              type="text"
              id="sub_title"
              name="sub_title"
              value={news.sub_title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="text">
              Texto
            </label>
            <textarea
              id="text"
              name="text"
              value={news.text}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="image">
              Imagem
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {news.image && (
              <img src={news.image} alt="Preview" className="mt-4 w-full max-h-64 object-cover rounded-lg" />
            )}
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600">
              Criar Notícia
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewsPage;