export function findByName(dataset, name) {
  return dataset.find((obj) => {
    // Validation (here we make everything lowercase)
    return obj.name.toLowerCase() === name.toLowerCase();
  });
}
