const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search() {
	const lowerCaseInput = input.value.toLowerCase();
	const lowerCaseFruitArr = fruits.map(x => x.toLowerCase());

	const filteredSearch = lowerCaseFruitArr.filter(word => word.includes(lowerCaseInput));

	const newFruitArr = filteredSearch.map(x => x.charAt(0).toUpperCase() + x.slice(1));

	return newFruitArr;
	// TODO	
}

function searchHandler(e) {
	// TODO
}

function showSuggestions() {
	// add newFruitArr ul in .suggestions
	search().forEach(fruit => {
		const newLi = document.createElement('li');
		newLi.innerText = fruit;
		suggestions.append(newLi);
	});
}

function clearSuggestions() {
	// suggestions.removeChild(document.querySelector('li'));
	while (suggestions.firstChild) {
		suggestions.removeChild(suggestions.firstChild);
	}

	// let element = document.getElementById("idOfParent");
	// while (element.firstChild) {
	// 	element.removeChild(element.firstChild);
	// }
	
}

function useSuggestion(e) {
	// TODO
}

// input.addEventListener('keyup', searchHandler);
input.addEventListener('keyup', showSuggestions);
input.addEventListener('keydown', clearSuggestions);
suggestions.addEventListener('click', useSuggestion);