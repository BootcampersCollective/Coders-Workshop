
/**
* Given an array of numbers representing the stock prices of a company in chronological order,
* write a function that calculates the maximum profit you could have made from buying and selling
* that stock once. You must buy before you can sell it.
* e.g. given the array [9, 11, 8, 5, 7, 10], you should return 5, since that's the greatest profit that
* can be made.
* Try doing this problem without using a nested for-loop, i.e. only iterating through the array once.
* (This is referred to as being done in O(n) time, whereas a nested for-loop would be O(n^2).)
*/

export class MaxProfit {
  static maxProfitForward(list: number[]) {
    if (!list || list.length < 1) return 0;

    let maxProfit = 0;
    let end = 1;
    let start = list[0];

    while (end < list.length) {
      let profit = 0;
      while(list[end] > start) {
        profit = profit + (list[end] - start);
        if (profit > maxProfit) maxProfit = profit;
        start = list[end];
        end = end + 1;
      }
      start = list[end];
      end = end + 1;
    }
    return maxProfit;
  }
}