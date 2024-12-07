// get routes without params
export enum RoutesWithoutParams {
  AllUser = "/api/v1/users",
  Session = "/api/v1/session/uasdhuashejhrakjiasudfauebasd",
  // News
  AllNews = "/api/v1/news",
  CreateNews = "/api/v1/news-create"
}

export const routesWithParams = {
  // Categoreis
  findOneNews: (idNews: number): string => {
    return `/api/v1/news/${idNews}`;
  },
  updateNews: (idNews: number): string => {
    return `/api/v1/news-update/${idNews}`;
  },
  deleteNews: (idNews: number): string => {
    return `/api/v1/news-delete/${idNews}`;
  }
};
