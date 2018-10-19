export const wrapActionTypes = prefix => types => {
  Object.keys(types).forEach(([key, value]) => {
    types[key] = prefix.toUpperCase() + '_' + value;
  });

  return Object.freeze(types);
};