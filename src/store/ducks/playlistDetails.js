export const Types = {
  GET_REQUEST: 'playlistDetails/GET_REQUEST',
  GET_SUCESS: 'playlistDetails/GET_SUCESS'
};

const INITIAL_STATE = {
  data: {},
  loading: false
};

export default function playlistDetails(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCESS:
      return { ...state, loading: false, data: action.playload.data };
    default:
      return state;
  }
}

export const Creators = {
  getPlaylistDetailsRequest: id => ({
    type: Types.GET_REQUEST,
    payload: { id }
  }),

  getPlaylistDetailstSuccess: data => ({
    type: Types.GET_SUCESS,
    playload: { data }
  })
};
