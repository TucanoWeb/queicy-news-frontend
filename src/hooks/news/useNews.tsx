import { INewsResponse, INewsPayload } from "../../types/news/newsType";
import { IErrorResponse } from "../../types/serverResponse/types";
import { useFetch } from "../useFetch";
import { RoutesWithoutParams } from "../useFetch/getRoutes";
import { newsService } from "../../services/news/news.service";

const useNews = () => {
  const useFindAllNews = () =>
    useFetch<INewsResponse[]>(RoutesWithoutParams.AllNews, {
      initialValue: []
    });

  const createNews = async (payload: INewsPayload) => {
    try {
      const response = await newsService.create(payload);
      return response;
    } catch (e: unknown) {
      const error = e as IErrorResponse;
      throw new Error(`Code ${error.response.data.code}`);
    }
  };

  const findOneNews = async (idNews: number) => {
    try {
      const response = await newsService.findOne(idNews);
      return response;
    } catch (e: unknown) {
      const error = e as IErrorResponse;
      throw new Error(`${error.response.data.code}`);
    }
  };

  const updateNews = async (idNews: number, payload: INewsPayload) => {
    try {
      const response = await newsService.update(idNews, payload);
      return response;
    } catch (e: unknown) {
      const error = e as IErrorResponse;
      throw new Error(`${error.response.data.code}`);
    }
  };

  const destroyNews = async (idNews: number) => {
    try {
      const response = await newsService.destroy(idNews);
      return response;
    } catch (e: unknown) {
      const error = e as IErrorResponse;
      throw new Error(`${error.response.data.code}`);
    }
  };

  return {
    createNews,
    useFindAllNews,
    updateNews,
    destroyNews,
    findOneNews
  };
};

export default useNews;
