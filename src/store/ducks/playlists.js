
export const Types = {
  GET_REQUEST: 'playlists/GET_REQUEST',
  GET_SUCESS: 'playlists/GET_SUCESS'
};

// Reducers

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCESS:
      return { ...state, loading: false, data: action.playload.data };
    default:
      return state;
  }
}

// Action
export const Creators = {
  getPlaylistsRequest: () => ({ type: Types.GET_REQUEST }),

  getPlaylistSuccess: data => ({
    type: Types.GET_SUCESS,
    playload: { data }
  })
};
