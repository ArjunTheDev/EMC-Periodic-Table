/**
 * Function to shorten the given text based on the given length.
 * 
 * @param {String} description 
 * @param {Number} maxLength 
 * @returns String
 */
export const shortenTheTextByLength = (description, maxLength = 70) => {
    if (description.length <= maxLength) {
      return description
    }
    return `${description.slice(0, maxLength)}...`
}