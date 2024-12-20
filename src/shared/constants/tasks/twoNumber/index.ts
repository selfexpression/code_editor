export const TWO_NUMBER = {
  title: 'Two Sum',
  description: [
    'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
    'You may assume that each input would have exactly one solution, and you may not use the same element twice.',
    'You can return the answer in any order.',
  ],
  examples: [
    {
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0,1]',
      explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].',
    },
    { input: 'nums = [3,2,4], target = 6', output: '[1,2]' },
    { input: 'nums = [3,3], target = 6', output: '[0,1]' },
  ],
  constraints: [
    '2 <= nums.length <= 104',
    '-109 <= nums[i] <= 109',
    '-109 <= target <= 109',
    'Only one valid answer exists.',
  ],
};

export const TWO_NUMBER_HIGHLIGHT_WORDS = ['nums', 'target'];

export const TWO_NUMBER_OUTPUT = {
  success: '[0,1]',
  error: 'SyntaxError: Unexpected token',
};
