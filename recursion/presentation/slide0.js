(function () {
	let currentAction = 0
	let currentSlide = 0

	let nextAction = () => {
		if (currentAction < actions.length)
			actions[currentAction++]()
	}

	let nextSlide = () => {
		document.getElementById("slide" + currentSlide++).classList.add("slide--done")
		setTimeout(() => {
			document.body.style.transform = "translateY(-" + (currentSlide * 100) + "%)"
		}, 400)
	}

	let nextPage = () => {
		window.location.assign("slide1.html")
	}

	let slide1action0 = () => {
		document.getElementById("tshirt").classList.add("slideup")
	}

	let slide1action1 = () => {
		document.getElementById("rain").classList.add("slideleft")
	}

	let slide1action2 = () => {
		document.getElementById("tshirt").setAttribute("src", "img/tshirtwet.svg")
	}

	let slide3action0 = () => {
		document.getElementById("rain1").classList.add("slideleft")
		setTimeout(() => {
			document.getElementById("face").setAttribute("src", "img/sad.svg")
		}, 400)
	}

	let actions = [
		nextSlide,
		slide1action0,
		slide1action1,
		slide1action2,
		nextSlide,
		nextSlide,
		slide3action0,
		nextSlide,
		nextPage
	]

	document.addEventListener("keydown", event => {
		if (event.isComposing || event.keyCode === 229)
			return
		if (event.keyCode === 39 || event.keyCode === 34)
			nextAction()
	})
})()