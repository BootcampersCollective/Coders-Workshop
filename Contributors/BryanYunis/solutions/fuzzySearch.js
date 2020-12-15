const dict = {
  Juneau: "Alaska",
  "Little Rock": "Arkansas",
  Denver: "Colorado",
  Atlanta: "Georgia",
  Boise: "Idaho",
  Annapolis: "Maryland",
  Boston: "Massachusetts",
  "Jefferson City": "Missouri",
  Lincoln: "Nebraska",
  Trenton: "New Jersey",
  Raleigh: "North Carolina",
  Bismarck: "North Dakota",
  Austin: "Texas",
  Richmond: "Virginia",
  Olympia: "Washington",
  Madison: "Wisconsin",
  Cheyenne: "Wyoming"
}

const fuzzySearch = (dict, search) => {
  if (dict[search]) {
    return dict[search]
  }
  const dictFrequencies = {}

  Object.keys(dict).forEach((word) => {
      dictFrequencies[word] = getFrequencies(word)
  })
  const searchFrequencies = getFrequencies(search)
  let divergenceCount = 0
  Object.keys(searchFrequencies).forEach((letter) => {
      Object.keys(dictFrequencies).forEach((word) => {
          if(dictFrequencies[word][letter]) {
              
          }
      })


  })
  
}

const getFrequencies = word => {
  const uncap = word.toLowerCase()
  const freq = {}
  uncap.split("").forEach((letter) => {
    if (freq[letter]) {
      freq[letter]++
    } else {
      freq[letter] = 1
    }
  })
  return freq
}
