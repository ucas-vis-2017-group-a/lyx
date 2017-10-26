
var data = [ // <-A
    { expense: 10, category: "基站分布" },
    { expense: 15, category: "基站迁移" },
    { expense: 30, category: "基站分布" },
    { expense: 50, category: "短信词云" },
    { expense: 80, category: "基站迁移" },
    { expense: 65, category: "基站分布" },
    { expense: 55, category: "基站迁移" },
    { expense: 30, category: "短信词云" },
    { expense: 20, category: "基站分布" },
    { expense: 10, category: "短信词云" },
    { expense: 8, category: "基站迁移" }
];

function render(data, category) {
    d3.select("#main").selectAll("div.h-bar") // <-B
        .data(data)
        .enter()
        .append("div")
        .attr("class", "h-bar")
        .append("span");

    d3.select("#main").selectAll("div.h-bar") // <-C
        .data(data)
        .exit().remove();

    d3.select("#main").selectAll("div.h-bar") // <-D
        .data(data)
        .attr("class", "h-bar")
        .style("width", function (d) {
            return (d.expense * 5) + "px";
        }
        )
        .select("span")
        .text(function (d) {
            return d.category;
        });

    d3.select("#main").selectAll("div.h-bar")
        .filter(function (d, i) { // <-E
            return d.category == category;
        })
        .classed("selected", true);
}

render(data);

function select_cat(category) {
    render(data, category);
    console.log("clicked " + category);
}

// commented because the DOM has already loaded when this js is injected, listener is useless
//document.addEventListener('DOMContentLoaded',
//    function () {
        var left = d3.select("#left");
        var guide_sects = left.selectAll(".section-guide")
            .each(function (d, i) {
                d3.select(this).on("click", function () {
                    select_cat(d3.select(this).select("span").text());
                });
            });
//    });