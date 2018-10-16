(function() {
	// global object
	const formToObj = {};

	const init = (formName) => {
		const returnedObj =  { };
		// get target forms
		const targetElement = document.querySelector(formName);
		// get rid of the NodeList to use array functions
		const targetChildren = [...targetElement.children];
		// loop through children and find inputss
		targetChildren.forEach(child => {
			// if child is input
			if (child.tagName === "INPUT") {
				// check for the conditions
				const splittedName = child.name.split(".");
				// check for array
				if (splittedName.length < 2 && splittedName[0].includes("[]")) {
					// add the value to the array
					const newArr = splittedName[0].slice(0, splittedName[0].length - 2);
					// check for the existence
					if(returnedObj[newArr]) {
						returnedObj[newArr].push(child.value);
					} else {
						returnedObj[newArr] = [child.value];
					}
					return;
				}

				if(splittedName.length === 2 && splittedName[1].includes("[]")) {

					const newArr = splittedName[1].slice(0, splittedName[1].length - 2);
					const newObj = splittedName[0];
					// check again
					if(returnedObj[newObj] && returnedObj[newObj][newArr]) {
						returnedObj[newObj][newArr].push(child.value);	
					} else {
						returnedObj[newObj] = { };
						returnedObj[newObj][newArr] = [child.value];
					}
					return;
				}
				
				if(splittedName.length === 2 && !splittedName[1].includes("[]")) {
					// if there is no brackets use object notation
					returnedObj[splittedName[0]][splittedName[1]] = child.value;
					return;
				}
				// if there is no brackets or linked objects
				else {
					returnedObj[splittedName[0]] = child.value;
				}				
			}
		});
		return returnedObj;
	}
	formToObj.init = init;
	window.formToObj = formToObj;

})();