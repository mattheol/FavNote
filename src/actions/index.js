export const removeItemAction = (itemType, id) => ({
  type: 'REMOVE_ITEM',
  payload: { itemType, id },
});

export const addItemAction = (itemType, itemContent) => ({
  type: 'ADD_ITEM',
  payload: {
    itemType,
    item: {
      id: 5,
      ...itemContent,
    },
  },
});
