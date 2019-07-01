const initialState = {
  ownerID: "",
  flats: [],
  locks: [],
  guests: []
};

const actions = {
  SET_FLATS: "SET_FLATS",
  SET_LOCKS: "SET_LOCKS",
  SET_GUESTS: "SET_GUESTS"
};

const { SET_FLATS, SET_LOCKS, SET_GUESTS } = actions;

export default function appReducer(state: any, action: any) {
  if (typeof state === "undefined") {
    return initialState;
  }

  switch (action.type) {
    case SET_FLATS:
      return {
        ...state,
        flats: action.flats
      };
    case SET_LOCKS:
      return {
        ...state,
        locks: action.locks
      };
    case SET_GUESTS:
      return {
        ...state,
        guests: action.guests
      };
  }
  return state;
}
