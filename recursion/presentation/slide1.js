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

	let slide0action0 = () => {
		document.getElementById("data").classList.add("reveal")
	}

	let slide0action1 = () => {
		document.getElementById("plus").classList.add("reveal")
		document.getElementById("iot").classList.add("reveal")
	}

	let slide0action2 = () => {
		document.getElementById("plus1").classList.add("reveal")
		document.getElementById("ml").classList.add("reveal")
	}

	let slide1action0 = () => {
		document.querySelectorAll("circle").forEach((e) => {
			e.classList.add("change")
		})
	}

	let slide1action1 = () => {
		document.querySelectorAll(".red").forEach((e) => {
			e.classList.add("color")
		})
	}

	let slide1action2 = () => {
		document.querySelectorAll(".area").forEach((e) => {
			e.classList.add("change")
		})
	}

	let slide1action3 = () => {
		document.querySelectorAll(".yellow").forEach((e) => {
			e.classList.add("color")
		})
	}

	let slide1action4 = () => {
		document.querySelectorAll(".red").forEach((e) => {
			e.classList.remove("color")
			e.classList.add("shade")
		})
		document.querySelectorAll(".yellow").forEach((e) => {
			e.classList.remove("color")
		})
		document.querySelectorAll(".area").forEach((e) => {
			e.classList.remove("change")
		})
		setTimeout(() => {
			document.getElementById("tem").classList.add("reveal")
			setTimeout(() => {
				document.getElementById("hum").classList.add("reveal")
			}, 400)
		}, 400)
	}

	let slide1action5 = () => {
		document.querySelectorAll(".red").forEach((e) => {
			e.classList.remove("shade")
			e.classList.add("color")
		})
		document.querySelectorAll(".yellow").forEach((e) => {
			e.classList.add("color")
		})
		document.querySelectorAll(".area").forEach((e) => {
			e.classList.add("change")
		})
	}

	let slide1action6 = () => {
		document.getElementById("ws").classList.add("reveal")
		setTimeout(() => {
			document.getElementById("p").classList.add("reveal")
			setTimeout(() => {
				document.getElementById("er").classList.add("reveal")
			}, 400)
		}, 400)
	}

	let slide1action7 = () => {
		document.querySelectorAll(".acc").forEach((e) => {
			e.classList.remove("color")
		})
	}

	let slide2action0 = () => {
		document.getElementById("don").classList.add("change")
	}

	let slide3action0 = () => {
		document.getElementById("sell").classList.add("change")
	}

	let actions = [
		slide0action0,
		slide0action1,
		slide0action2,
		nextSlide,
		slide1action0,
		slide1action1,
		slide1action2,
		slide1action3,
		slide1action4,
		slide1action5,
		slide1action6,
		slide1action7,
		nextSlide,
		slide2action0,
		nextSlide,
		slide3action0,
		nextSlide
	]

	document.addEventListener("keydown", event => {
		if (event.isComposing || event.keyCode === 229)
			return
		if (event.keyCode === 39 || event.keyCode === 34)
			nextAction()
	})
})()