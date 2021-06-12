# {
# "bob": [{timestamp: 75, activity: logout}, {timestamp: 87, activity: login}],
# "none": [{timestamp: 1, activity: login}, {timestamp: 210, activity: logout}],
# }

activity = [
(1, '@login', None),
(5, '@startVideo', 'Bob'),
(20, '@startVideo', 'Thomas'),
(66, '@stopVideo', 'Thomas'),
(70, '@startVideo', 'Lily'),
(75, '@stopVideo', 'Bob'),
(78, '@stopVideo', 'Lily'),
(100, '@logout', None),
(150, '@login', None),
(160, '@startVideo', 'Thomas'),
(205, '@stopVideo', 'Thomas'),
(210, '@logout', None) 
]

{}







# let starts = []
# let ends = []

# for (let i=0; i < activity.length; i++){

#   if(activity[i][1] == '@login' && activity[i][2] == 'None') {
#     starts.push(activity[i][0])
#   }

#   if(activity[i][1] == '@logout' && activity[i][2] == 'None') {
#     ends.push(activity[i][0])
#   }
# }