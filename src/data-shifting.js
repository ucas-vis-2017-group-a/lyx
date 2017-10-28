function main() {
	// Updata mode: selection.data(data) bundles data to elements and returns the data-bundled element set.
	// Enter mode: selection.data(data).enter() returns the set of new-data-bundled elements whose data are not
	// bundled in previous data call.
	// Exit mode: selection.exit returns the set of elements who are not bundled to any data.
	var data = [10, 15, 30, 50, 80, 34, 23, 78, 12, 44, 55, 23, 33];
	// render data list into the web page
	function render(data) {
		// Enter mode
		d3.select("#main").selectAll("div.h-bar") // select the set of visual objects
			.data(data) // bundle data to this set
			.enter() // selects and returns all data-bundled elements that have not been visualized, at the first call, it selects all data list
			.append("div") // create new div for each new data-bundled element
			.attr("class", "h-bar")
			.append("span");

		// Update mode
		d3.select("#main").selectAll("div.h-bar")
			.data(data)
			.style("width", function (d) {
				return (d * 7) + "px";
			})
			.select("span") // the child of the div element also get the parameter d, 
			//such data transmission from father to child is default in d3!
			.text(function (d) {
				return d;
			});

		// Exit mode
		d3.select("#main").selectAll("div.h-bar")
			.data(data)
			.exit() // get elements that have no data bundled to it
			.remove(); // can add animations to these elements

	}

	var interval = setInterval(function () {
		data.shift();
		data.push(Math.round(Math.random() * 100));
		render(data);
	}, 1500);

	render(data);

}

main();