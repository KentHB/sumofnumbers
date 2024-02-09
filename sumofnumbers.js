const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(`sumFor: ${sumFor(testNums)}`);

function sumWhile(nums) {
  let index = 0;
  let total = 0;
  while (index < nums.length) {
    total += nums[index];
    index++;
  }
  return total;
}

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(`sumWhile: ${sumWhile(testNums)}`);

console.log(`sumRecursion: ${sumRecursion(testNums)}`);

const sumTheSimpleWay = (nums) => _.reduce(nums, function (memo, num) { return memo + num; }, 0);

console.log(`sumTheSimpleWay: ${sumTheSimpleWay(testNums)}`);
