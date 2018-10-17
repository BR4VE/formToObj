# formToObj.js

###  Small utility library that turns HTML forms to JS objects

# Usage
```html
<form id="myForm">
	<input name="firstName" value="Mert"></input>
	<input name="lastName" value="Btmz"></input>
	<input name="address.home.latitude" value="32"></input>
	<input name="address.home.longitude" value="52"></input>
	<input name="address.work.latitude" value="52"></input>
	<input name="address.work.longitude" value="32"></input>
	<input name="children[]" value="Mark"></input>
	<input name="children[]" value="Susan"></input>
	<input name="siblings.brothers[]" value="John"></input>
	<input name="siblings.sisters[]" value="Anie"></input>
</form>
// Note: "[]" cannot be used before object links
// Use it as a single identifier or use it in the end of object chain
```
```javascript
const formValues = formToObj.init("#myForm");
 ```

### The output will be : 
```javascript
{
	firtsName: "Mert",
	lastName: "Btmz",
	address: {
		home: { latitude: "32", longitude: "52" },
		work: { latitude: "52", longitude: "32" },
	},
	children: ["Mark", "Susan"],
	siblings: {
		brothers: ["John"],
		sisters: ["Anie"]
	}
}
 ```
### License / Credits

formToObj.js is released under the MIT license.