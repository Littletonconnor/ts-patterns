/**
 * Quick Sort Implementation
 *
 * Sorts an array of numbers in ascending order using the Quick Sort algorithm.
 *
 * HOW IT WORKS:
 * 1. Choose a pivot (commonly the last element in the array).
 * 2. Partition the array into two subarrays:
 *    - left:  All elements less than the pivot
 *    - right: All elements greater than or equal to the pivot
 * 3. Recursively apply Quick Sort to the left subarray and right subarray.
 * 4. Combine the sorted left subarray, the pivot, and the sorted right subarray.
 *
 * EXAMPLE:
 * ----------
 * Given the array: [3, 7, 1, 2, 9, 5]
 * - We choose pivot = 5 (the last element).
 * - Partition:
 *   left  = [3, 1, 2]   (elements < 5)
 *   right = [7, 9]      (elements >= 5)
 * - Now quick-sort left and right subarrays:
 *
 *   quickSort([3, 1, 2]):
 *     pivot = 2
 *     left  = [1]    (since 1 < 2)
 *     right = [3]    (since 3 >= 2)
 *     combine => [1, 2, 3]
 *
 *   quickSort([7, 9]):
 *     pivot = 9
 *     left  = [7]    (since 7 < 9)
 *     right = []     (no elements >= 9 except pivot itself)
 *     combine => [7, 9]
 *
 * - Finally, merge those sorted parts around the original pivot:
 *   => [1, 2, 3] + [5] + [7, 9]
 *   => [1, 2, 3, 5, 7, 9]
 *
 * @param arr - The array of numbers to sort
 * @returns A new array with the elements sorted in ascending order
 */
export function quickSort(arr: number[]): number[] {
  // Base case: if the array has 0 or 1 elements, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }

  // Choose the pivot (here, we use the last element)
  const lastElement = arr.length - 1;
  const pivot = arr[lastElement];

  // Partition the array into two subarrays
  const left: number[] = [];
  const right: number[] = [];

  // Move all elements (except the pivot) to either left or right subarray
  for (let i = 0; i < lastElement; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  // Recursively sort the subarrays and combine them with the pivot in between
  return [...quickSort(left), pivot, ...quickSort(right)];
}
