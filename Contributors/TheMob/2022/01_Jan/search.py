def search(arr, n):
  left = 0
  right = len(arr)-1
  while left <= right:
    mid = (left + right)//2
    if arr[mid] == n:
      return True
    elif arr[mid] > n:
      right = mid - 1
    else:
      left = mid + 1
  return False
