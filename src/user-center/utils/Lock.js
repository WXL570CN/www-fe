/**
 * Created by ronie on 2019/12/10.
 */

export default class Lock {
  constructor() {
    this.resource = new Map();
  }

  create(key) {
    if (this.resource.has(key)) {
      return false;
    }
    return this.resource.set(key, true);
  }

  delete(key) {
    return this.resource.delete(key);
  }
}


export const globalLock = new Lock();
