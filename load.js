const len = Math.floor(Math.random() * 100) + 1;
pcs = [];

for (let i = 0; i < len; i++) {
  pcs[i] = Math.floor(Math.random() * 100);
}
console.log("Initial Loads:", pcs);

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

pcs = mergeSort(pcs);
console.log("Sorted Loads:", pcs);

while (true) {
  let min = pcs[0];
  let max = pcs[pcs.length - 1];

  let loadToAdd = Math.floor(max / 3);

  if (min + loadToAdd <= max) {
    pcs[0] += loadToAdd;
    pcs[pcs.length - 1] -= loadToAdd;
    pcs = mergeSort(pcs);
  } else {
    break;
  }
}

console.log("After Load Balancing:", pcs);
