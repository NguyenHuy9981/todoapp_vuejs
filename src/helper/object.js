export const updateItem = (item, update) => {
  Object.entries(update).forEach((entry) => {
    const key = entry[0];
    const value = entry[1];
    item[key] = value;

    return item;
  });
};
