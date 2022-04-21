export function findLargest(dataset, key) {
  const objects = (dataset).sort((object1, object2) => {
    if (object1[key] > object2[key]) {
      return 1;
    }

    if (object1[key] < object2[key]) {
      return -1;
    }

    return 0;
  });

  return objects[objects.length - 1];
}
