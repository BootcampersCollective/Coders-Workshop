
/**
* This will calculate the max profit of an array in linear time
*
/*
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