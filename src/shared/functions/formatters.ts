export const formatNumber = (number: number, delimiter: string) => {
	let str = number.toString()
	let reversedStr = str.split('').reverse().join('')
	let formattedStr = reversedStr.match(/.{1,3}/g)?.join(delimiter).split('').reverse().join('')
	return formattedStr
}