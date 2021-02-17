// {
// "bob": [{timestamp: 75, activity: logout}, {timestamp: 87, activity: login}],
// "none": [{timestamp: 1, activity: login}, {timestamp: 210, activity: logout}],
// }

activity = [
  [1, '@login', 'None'],
  [5, '@startVideo', 'Bob'],
  [20, '@startVideo', 'Thomas'],
  [66, '@stopVideo', 'Thomas'],
  [70, '@startVideo', 'Lily'],
  [75, '@stopVideo', 'Bob'],
  [78, '@stopVideo', 'Lily'],
  [100, '@logout', 'None'],
  [150, '@login', 'None'],
  [160, '@startVideo', 'Thomas'],
  [205, '@stopVideo', 'Thomas'],
  [210, '@logout', 'None']
]

const arr = [1, 2, 3]

const arr2 = [...arr, 4, 5]

const activityOpenAndClose = {
  '@login': '@logout',
  '@startVideo': '@stopVideo'
}

const getTime = (user, activity) => {
  // returns length of time user was doing activity
  let startTime = 0
  let duration = 0
  namedEntries[user].forEach((activityItem) => {
    if (activityItem.activity === activity) {
      startTime = activityItem.timestamp
    } else if (activityOpenAndClose[activity] === activityItem.activity) {
      duration += activityItem.timestamp - startTime
    }
  })
  return duration
}

console.log(getTime('None', '@login'))
