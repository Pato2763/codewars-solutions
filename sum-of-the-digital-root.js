function digitalRoot(n) {
  if (n < 10) return n;
  const sum = n
    .toString()
    .split("")
    .reduce((acc, cv) => acc + Number(cv), 0);
  return digitalRoot(sum);
}

console.log(digitalRoot(1165));
