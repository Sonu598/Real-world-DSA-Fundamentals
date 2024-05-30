// Statement

// We have to write the code for a pagination. In which we have to shows only 10 pages at a time and if there is more that 10 pages it shows "..." in bothsides.

// Implementation

function Pagination(N, curr) {
  // here N = number of total pages & curr = current or clicked page by user
  const max = 10;
  let pagination = [];

  if (N <= max) {
    for (let a = 1; a <= N; a++) {
      pagination.push(a.toString());
    }
  } else {
    pagination.push("1");

    let start, end;

    if (curr <= 5) {
      start = 2;
      end = max - 1;
    } else if (curr >= N - 4) {
      start = N - (max - 2);
      end = N - 1;
    } else {
      start = curr - 4;
      end = curr + 4;
    }
    if (start > 2) {
      pagination.push("...");
    }
    for (let a = start; a <= end; a++) {
      pagination.push(a.toString());
    }
    if (end < N - 1) {
      pagination.push("...");
    }
    pagination.push(N.toString());
  }
  return pagination;
}

// Examples
console.log(Pagination(5, 5));
console.log(Pagination(100, 52));
console.log(Pagination(10, 5));
console.log(Pagination(15, 9));

// run "node pagination.js" to find the answers of these examples.
