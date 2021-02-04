const checkInArOfObjByKeyAndVal = (array, keySearch, value) => {
  for (let i = 0; i < array.length; i++) {
    let keys = Object.keys(array[i]);
    for (let j = 0; j < keys.length; j++) {
      if (keys[j] === keySearch && array[i][keys[j]] === value) {
        return i;
      }
    }
  }
  return false;
};

export default checkInArOfObjByKeyAndVal;
