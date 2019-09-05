export function isEqualArray(a,b) {
  if(!a || !b) {
    return false;
  }
  if(a.length !== b.length) {
    return false;
  }

  for (let index = 0; index < a.length; index++) {
    if (a[index] !== b[index]) {
      
    }
  }

  return true;
}