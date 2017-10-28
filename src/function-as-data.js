function main() {
    // begin to bundle functions as data
    var data = [];

    var next = function (x) {
        return 15 + x * x;
    };

    var newData = function () {
        data.push(next);
        return data;
    };

    function render() {
        var selection = d3.select("#main")
            .selectAll("div")
            .data(newData);

        selection.enter().append("div").append("span");

        selection.exit().remove();

        selection.attr("class", "v-bar")
            .style("height", function (d, i) {// d is the reference to newData function, i is the parameter for d
                return d(i) + "px";
            })
            .select("span")
            .text(function (d, i) {
                return d(i);
            });
    }

    var interval = setInterval(function () {
        render();
    }, 1500);

    render();

}

main();