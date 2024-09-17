export class User {
  id?: number;
  uname?: string;
  email?: string;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}