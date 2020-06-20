/**
 * Created by ronie on 2019/12/9.
 */

class VueUtil {
  static clearArray(array) {
    array.splice(0);
  }

  static replaceArray(oldArray, newArray) {
    oldArray.splice(0, oldArray.length, ...newArray);
  }
}

export default VueUtil;
