// Given an array of integers, return a new array such that each element at index i of the new array is the
// product of all the numbers in the original array except the one at i.

// For example, if our input was `[1, 2, 3, 4, 5]`, the expected output would be `[120, 60, 40, 30, 24]`.
// If our input was `[3, 2, 1]`, the expected output would be `[2, 3, 6]`.

// brute force; most basic way of solving it. Find all values to the left and right of each item, multiply them together
// Do that for every item.


import java.util.Arrays;

class Main {
  public static void main(String[] args) {
    int[] test1 = new int[]{1, 2, 3, 4, 5};
    int[] test2 = new int[]{3, 2, 1};    
    System.out.println(Arrays.toString(bruteForce(test1)));
    System.out.println(Arrays.toString(bruteForce(test2)));

		System.out.println(Arrays.toString(newnums));
  }

  public static int[] bruteForce(int[] arr) {
    int[] result = new int[arr.length];
    Arrays.fill(result, 1);

    for (int i = 0; i < arr.length; i++) {
      for (int notI = 0; notI < arr.length; notI++) {
        if (i == notI) continue;
        result[i] *= arr[notI];
      }
    }

    return result;
  }
   public static int[] notBruteForce(int[] nums) {
   int[] nums = new int[] {3, 2, 1}; //{1,2,3,4,5};
		int[] newnums = new int[3];
		int result =1;
		for(int i=0;i<nums.length;i++){
				result *=nums[i];
		}
		for(int i=0;i<nums.length;i++){
				newnums[i]=result/nums[i];
		}

    return newnums;
  }
}
