const lookup = new Map

function fibonacci(n) {
  if (n <= 0) return 0
  if (n == 1) return 1
  if (lookup.has(n)) return lookup.get(n)
  const memo = fibonacci(n - 1) + fibonacci(n - 2)
  lookup.set(n, memo)
  return memo
}

// Test cases:
console.log(fibonacci(0)) // 0
console.log(fibonacci(1)) // 1
console.log(fibonacci(2)) // 1
console.log(fibonacci(8)) // 21
console.log(fibonacci(17)) // 1597
console.log(fibonacci(58)) // 591286729879
