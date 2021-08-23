import { request, RequestConstant } from './request';

export const API = {
  getPhotos: (data) => request(RequestConstant.GET, '/photos', data),
  getPhotosRelated: (id) => request(RequestConstant.GET, `/photos/${id}/related`),
  getPhotoById: (id) => request(RequestConstant.GET, `/photos/${id}`),

  getTopics: (data) => request(RequestConstant.GET, '/topics', data),
  getTopicBySlug: (slug) => request(RequestConstant.GET, `/topics/${slug}`),
  getTopicPhotos: (slug) => request(RequestConstant.GET, `/topics/${slug}/photos`),

  searchPhotos: (data) => request(RequestConstant.GET, '/search', data),
}
