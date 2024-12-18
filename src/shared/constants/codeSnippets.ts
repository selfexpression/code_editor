export const CODE_SNIPPETS = {
  javascript: `const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = i + 1; j < nums.length; j += 1) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

const nums = [2,7,11,15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);
  `,
  typescript: `const twoSum = (nums: number[], target: number): number[] => {
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = i + 1; j < nums.length; j += 1) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

const nums: number[] = [2,7,11,15];
const target: number = 9;
const result: number[] = twoSum(nums, target);
console.log(result);
  `,
};
