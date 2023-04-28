export default class SnackBarItem {
  #message;
  #type;
  #timeout;

  /**
   *
   * @param {string} message Message to display.
   * @param {string} type Type string from the SnackBarTypes object provided below.
   * @param {number} timeout Time (in milliseconds) before snackbar message automatically undisplays.
   */
  constructor(message, type, timeout = 5000) {
    this.#message = message;
    this.#type = type;
    this.#timeout = timeout;
  }

  get message() {
    return this.#message;
  }

  get type() {
    return this.#type;
  }

  get timeout() {
    return this.#timeout;
  }
}

export const SnackBarTypes = {
  SUCCESS: "success",
  WARN: "warn",
};
