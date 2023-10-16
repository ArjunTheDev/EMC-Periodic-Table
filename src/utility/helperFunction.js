export const shortenDescription = (description, maxLength = 70) => {
    if (description.length <= maxLength) {
      return description;
    }
    return `${description.slice(0, maxLength)}...`;
};