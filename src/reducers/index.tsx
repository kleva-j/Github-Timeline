type AppState = {};
type Action =
  | { type: 'MAKE_REQUEST'; payload: undefined }
  | { type: 'GET_DATA'; payload: any }
  | { type: 'ERROR'; payload: any };

export const ACTIONS = {
  MAKE_REQUEST: 'MAKE_REQUEST',
  GET_DATA: 'GET-DATA',
  ERROR: 'ERROR',
};

export const reducer: React.Reducer<AppState, Action> = (state: AppState, { type, payload }: Action) => {
  switch (type) {
    case ACTIONS.MAKE_REQUEST:
      return {
        loading: true,
        jobs: [],
      };

    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        jobs: payload.jobs,
      };

    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        jobs: [],
        error: payload.error,
      };

    default:
      return state;
  }
};
