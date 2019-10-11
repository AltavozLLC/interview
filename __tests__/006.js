import JSC from 'jscheck';

import updateItemInArray from '../questions/006';

describe('Question 006', () => {
  test('initial addition example', () => {
    const list = ['a', 'b', 'c'];

    const updatedList1 = updateItemInArray(list, 'd', true);
    expect(updatedList1).toEqual(['a', 'b', 'c', 'd']);

    const updatedList2 = updateItemInArray(updatedList1, 'd', true);
    expect(updatedList2).toEqual(['a', 'b', 'c', 'd']);
  });

  test('initial removal example', () => {
    const list = ['a', 'b', 'c'];

    const updatedList1 = updateItemInArray(list, 'c', false);
    expect(updatedList1).toEqual(['a', 'b']);

    const updatedList2 = updateItemInArray(updatedList1, 'c', false);
    expect(updatedList2).toEqual(['a', 'b']);
  });

  test('long list', () => {
    const set = new Set();
    while (set.size < 500000) {
      set.add(JSC.string()());
    }
    const list = [...set.values()];

    const item = 'new string';
    const updatedList = updateItemInArray(list, item, true);
    expect(updatedList.includes(item)).toEqual(true);
    expect(updatedList.length).toEqual(500001);

    const existingItem = updatedList[30000];
    expect(updateItemInArray(updatedList, existingItem, true).includes(existingItem)).toEqual(true);
    expect(updatedList.length).toEqual(500001);

    const removeItemFromArray = updateItemInArray(updatedList, existingItem, false);
    expect(removeItemFromArray.includes(existingItem)).toEqual(false);
    expect(removeItemFromArray.length).toEqual(500000);
  });
});