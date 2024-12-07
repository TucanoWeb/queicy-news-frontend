import { api } from "../../api";
import { RoutesWithoutParams, routesWithParams } from "../../hooks/useFetch/getRoutes";
import { INewsPayload, INewsResponse } from "../../types/news/newsType";
import { IGenericResponse } from "../../types/responseGeneric/types";

export const newsService = {
  create: async (payload: INewsPayload): Promise<IGenericResponse> => {
    const response = await api.post(RoutesWithoutParams.CreateNews, payload);
    return response.data.data;
  },

  findOne: async (idNews: number): Promise<INewsResponse> => {
    const response = await api.get(routesWithParams.findOneNews(idNews));
    return response.data.data;
  },

  update: async (idNews: number, payload: INewsPayload): Promise<IGenericResponse> => {
    const response = await api.put(routesWithParams.updateNews(idNews), payload);
    return response.data.data;
  },

  destroy: async (idNews: number): Promise<IGenericResponse> => {
    const response = await api.delete(routesWithParams.deleteNews(idNews));
    return response.data.data;
  }
};
