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
				let nameChain = returnedObj;
				// loop through the splittedName
				splittedName.forEach((name, index) => {
					// if its the last element
					if (index === splittedName.length - 1) {
						// check the last element if it contains brackets
						if (name.includes("[]")) {
							// check the previous 
							name = name.slice(0, name.length - 2);
							if (nameChain[name]) {
								nameChain[name].push(child.value);
							} else {
								nameChain[name] = [child.value];
							}
						} else {
							// if not array
							nameChain[name] = child.value;	
						}
						
						return;
					}
					// if not continue
					nameChain[name] = {};
					nameChain = nameChain[name];
				});				
			}
		});
		return returnedObj;
	}

	formToObj.init = init;
	window.formToObj = formToObj;

})();