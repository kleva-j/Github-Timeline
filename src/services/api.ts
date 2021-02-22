import { ajax } from 'rxjs/ajax';
import { of, Observable } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

// const API_ROOT = 'https://api.github.com/';
const API_ROOT_GRAPHQL = 'https://api.github.com/graphql';
const JOB_API = 'https://jobs.github.com/positions.json';

const requests = (baseUrl: string) => {
  return {
    get: (endpoint?: string, config?: Object) => {
      const url = endpoint ? baseUrl + endpoint : baseUrl;
      return ajax({
        url,
        method: 'GET',
        headers: {
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        ...config,
      }).pipe(
        map((res) => res.response),
        retry(1),
        catchError((error: Error) => {
          console.log('error: ', error);
          return of(error);
        }),
      );
    },
  };
};

const User = (() => {
  const Request = requests(API_ROOT_GRAPHQL);
  return {
    getUser<T>(username: string): Observable<T> | any {
      return Request.get(`users/${username}`);
    },
    getUserRepos<T>(username: string): Observable<T> | any {
      return Request.get(`users/${username}/repos`);
    },
    getFollowers<T>(username: string): Observable<T> | any {
      return Request.get(`users/${username}/followers`);
    },
    getFollowing<T>(username: string): Observable<T> | any {
      return Request.get(`users/${username}/following`);
    },
    getSubscriptions<T>(username: string): Observable<T> | any {
      return Request.get(`users/${username}/subscriptions`);
    },
    getOrganisation<T>(username: string): Observable<T> | any {
      return Request.get(`users/${username}/orgs`);
    },
    getSingleRepo<T>(username: string, repo: string): Observable<T> | any {
      return Request.get('', {
        body: JSON.stringify({
          query: `
            query {
              repository(owner: "${username}", name: "${repo}") {}
            }
          `,
        }),
      });
    },
  };
})();

const Jobs = (() => {
  const Request = requests(JOB_API);
  return {
    getAll<T>(): Observable<T> | any {
      return Request.get();
    },
    searchByTerms<T>(term: string, params = {}): Observable<T> | any {
      const url = setQueryParams(setParams(params, 'description', term));
      console.log(url);
      return Request.get(url);
    },
    searchByLocation<T>({ long, lat }: { long: string; lat: string }, params = {}): Observable<T> | any {
      const url = setQueryParams(setFields(params, ['long', 'lat'], { long, lat }));
      return Request.get(url);
    },
  };
})();

const setParams = (params: any, key: string, value: string): object => {
  params = { ...params, [key]: value };
  if (!value || !value.toString().trim().length) {
    delete params[key];
  }
  return params;
};

const setFields = (params: object, keys: string[], values: any): object => {
  return keys.reduce((acc, cur) => {
    return setParams(acc, cur, values[cur]);
  }, params);
};

const setQueryParams = (params: object) => {
  let qp = '?';
  for (const [key, value] of Object.entries(params)) {
    qp = qp + `&${key}=${value}`;
  }
  return qp;
};

export { User, Jobs, setFields, setParams };
