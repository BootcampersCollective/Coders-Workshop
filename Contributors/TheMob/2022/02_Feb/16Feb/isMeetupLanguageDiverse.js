const developers = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
]
// Your function should return `false` as there are three times the number of Javascript developers (3) as there are Python developers (1).

// dictionary of language counts

function isLangDiverse(devs) {
	const langs = devs.reduce((langCounts, dev) => {
		const lang = dev.language;
		langCounts[lang] = lang in langCounts
			? langCounts[lang] + 1
			: 1;
        return langCounts;
	}, {})

	const min = Math.min(...Object.values(langs))
	const max = Math.max(...Object.values(langs))
	return max <= 2 * min
}

console.log(isLangDiverse(developers))
