import { ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


const API_ROOT = 'https://api.github.com';

const requests = {
  post: (url: string, body:object) => ajax.post(`${API_ROOT}/${url}`, body),
  get: (url:string) => ajax.getJSON(`${API_ROOT}/${url}`).pipe(
    catchError(error => {
      console.log('error: ', error);
      return of(error);
    })
  )
};

const User = {
  getUser: (username:string) => requests.get(`users/${username}`),
  getUserRepos: (username:string) => requests.get(`users/${username}/repos`),
  getFollowers: (username:string) => requests.get(`users/${username}/followers`),
  getFollowing: (username:string) => requests.get(`users/${username}/following`),
  getSubscriptions: (username:string) => requests.get(`users/${username}/subscriptions`),
  getOrganisation: (username:string) => requests.get(`users/${username}/orgs`),
}

export {
  User,
  requests
};
