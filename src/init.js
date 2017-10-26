var ids = ["main", "left", "foot"];
d3.selectAll("div")
    .each(function (d, i) {
        d3.select(this).attr("id", ids[i]);
    });

var sections = ["基站分布", "基站迁移", "短信词云", "回到主页"];
var left = d3.select("#left"); // returns the first class left element.
for (var i = 0; i < sections.length; i++) {
    var button = left.append("button");
    var span = button.append("span").text(sections[i]);
    button.attr("class", "section-guide");
}

var foot_sects = ["data shifting", "function as data", "data filter"];
var foot = d3.select("#foot");
for (var i = 0; i < foot_sects.length; i++) {
    var button = foot.append("button");
    var span = button.append("span").text(foot_sects[i]);
    button.attr("class", "section-guide");
}