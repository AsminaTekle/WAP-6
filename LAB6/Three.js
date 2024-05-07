let printNumbers = (from, to) => {
    let current = from;
    const intervalId = setInterval(() => {
      console.log(current);
      if (current == to) clearInterval(intervalId);
      current++;
    }, 1000);
}

console.log(printNumbers(1, 10));