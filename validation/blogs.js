// Note: If we have a function, we want to return similar values for all possible return cases.
const validateBlogs = (blogData) => {

	/* // EXAMPLE of .filter()
	const array = ["string", 2, true, "other string"]
	const filteredArray = array.filter((arrayItem)=>{
		// .filter() will loop through an array we provide and will only return items that match true for the condition that we define
		// For .filter() the return value must be a boolean and should be true for items that we want to keep
		if (typeof(arrayItem) === 'string') {
			return true;
		} else {
			return false;
		}
	})
	console.log("array ", array)
	console.log("filteredArray ", filteredArray) */

	if (blogData.title === undefined || typeof(blogData.title) !== "string" || blogData.title.length > 40) {
		//blog data must be of type string
		return {
			isValid: false,
			message: "title is required and must be of type string less than 40 characters"
		}
	}

	if (blogData.text === undefined || typeof(blogData.text) !== "string") {
		
		return {
			isValid: false,
			message: "blog is required and must be of type string"
		}
	}

	if (blogData.author === undefined || typeof(blogData.author) !== "string" || blogData.author.length > 40 ) {
		// lastName is required and it must be a string
		return {
			isValid: false,
			message: "Author is required and it must be a string and less than 40 characters"
		}
	}

	if (blogData.category === undefined || !Array.isArray(blogData.category) || blogData.category.length === 0) {
		// age is NOT required, so first we check to see if it even exists before checking to see if the type is anything except 'number'
		return {
			isValid: false,
			message: "category is required and must have length"
		}
	}


	// We are going to use .filter() to iterate through favoriteFoods and will only bring through values that are NOT strings. Then we will check if the resultant array has any length, in which case we know there are non-string values in the array.
	const newBlogData = blogData.category.filter((blogs)=>{

		// If the callback function in .filter() returns true, then the item will be kept in the resultant array. If the callback returns false, the item will be filtered out
		if (typeof(blogs) !== 'string') {
			return true
		} else {
			return false
		}
	})

	console.log("blogs", newBlogData)

	if (newBlogData.length > 0) {
		return {
			isValid: false,
			message: "category must be an array of strings"
		}
	}

	return {
		isValid: true
	}
}

module.exports = {
	// These two lines are equivalent because the variable name and the key for the object are the same name. Typically, we write the short-hand version.
	// validateUserData: validateUserData
	validateBlogs,
}