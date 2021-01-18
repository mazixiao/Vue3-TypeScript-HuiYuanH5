const remSize = 100
const UIWidth = 1440
const maxWidth = 1440
const minWidth = 320

const getFontSize = function (screenWidth) {
	return screenWidth * remSize / UIWidth + 'px'
}
 
exports.getSize = () => {
	let Ohtml = document.documentElement
	let screenWidth = Ohtml.clientWidth
	if (screenWidth < minWidth) {
		Ohtml.style.fontSize = getFontSize(minWidth)
	} else if (screenWidth > maxWidth) {
		Ohtml.style.fontSize = getFontSize(maxWidth)
	} else {
		Ohtml.style.fontSize = getFontSize(screenWidth)
	}
}