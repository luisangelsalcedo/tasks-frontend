export const actions = {
  LOGIN: "[auth] login",
  LOGOUT: "[auth] logout",
  GET_USER_AUTH: "[auth] get_user_auth",
  //
  SET_MESSAGE: "[alert] set_message",
  SET_ERROR: "[alert] set_error",
  CLEAN_MESSAGE: "[alert] clean_message",
  //
  SHOW_MODAL: "[modal] show_modal",
  HIDE_MODAL: "[modal] hide_modal",
  //
  LOAD_BOARDS: "[board] load_all",
  LOADING_BOARDS: "[board] loading",
  CREATE_BOARD: "[board] create",
  EDIT_BOARD: "[board] edite",
  UPDATE_BOARD: "[board] update",
  DELETE_BOARD: "[board] delete",
  ADD_GUESTS: "[board] add_guests",
  ADD_TASK: "[board] add_task",
  REMOVE_TASK: "[board] remove_task",
  GET_BOARD_BY_ID: "[board] board_by_id",
  //
  LOAD_TASKS: "[task] load_all",
  LOADING_TASKS: "[task] loading",
  CREATE_TASK: "[task] create",
  EDIT_TASK: "[task] edite",
  UPDATE_TASK: "[task] update",
  DELETE_TASK: "[task] delete",
  ADD_ASIGNEDS: "[task] add_asigneds",
  //
  LOAD_USERS: "[user] load_users",
  CLEAN_ALL: "[all] clean_reducers",
};

export const endpoint = {
  LOGIN: `https://task-backend-luisangelsalcedo.herokuapp.com/api/user/login`,
  USERS: `https://task-backend-luisangelsalcedo.herokuapp.com/api/users`,
  USER: `https://task-backend-luisangelsalcedo.herokuapp.com/api/user`,
  BOARD: `https://task-backend-luisangelsalcedo.herokuapp.com/api/board`,
  TASK: `https://task-backend-luisangelsalcedo.herokuapp.com/api/task`,
  GET_USER_AUTH: `https://task-backend-luisangelsalcedo.herokuapp.com/api/user/token`,
  GET_BOARDS_BY_USER: `https://task-backend-luisangelsalcedo.herokuapp.com/api/boards/user`,
  GET_TASKS_BY_BOARD: `https://task-backend-luisangelsalcedo.herokuapp.com/api/tasks/board`,
  //
  LOGIN_GOOGLE: `https://task-backend-luisangelsalcedo.herokuapp.com/api/usergoogle/login`,
  USER_GOOGLE: `https://task-backend-luisangelsalcedo.herokuapp.com/api/usergoogle`,
};
