export class Bird {
  #id;
  #name;
  #sciName;
  #status;
  #order;
  #family;
  #images; // String array or URLs.


  /**
   * Bird object used in all templates.
   * @param { id, name, sciName, status, order, family, images } param0 Partial data returned from Nuthatch API.
   * @see { @link ../services/berd-service.js }
   */
  constructor({ id, name, sciName, status, order, family, images } ){
    this.#id = id;
    this.#name = name;
    this.#sciName = sciName;
    this.#status = status;
    this.#order = order;
    this.#family = family;
    this.#images = images;
  }

  get id() {
    return this.#id;
  }

  get name(){
    return this.#name;
  }

  get sciName(){
    return this.#sciName;
  }

  get status() {
    return this.#status;
  }

  get order() {
    return this.#order;
  }

  get family() {
    return this.#family;
  }

  get images() {
    return this.#images;
  }
}