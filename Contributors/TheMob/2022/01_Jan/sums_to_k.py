def sums_to_k(arr, k):
  l = 0
  r = 0
  while l < len(arr) and r < len(arr):
    if (l == r and arr[l] == k) or sum(arr[l:r+1]) == k:
      return arr[l:r+1]
    elif sum(arr[l:r+1]) < k:
      r += 1
    else:
      if l == r:
        r += 1
      l += 1
  return []
