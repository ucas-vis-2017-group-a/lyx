
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

document.addEventListener("DOMContentLoaded",
    function () {
        var footer = d3.select("#foot");
        var learn_sects = footer.selectAll(".section-guide")
            .each(function (d, i) {
                var filename = d3.select(this).select("span").text();
                d3.select(this).on("click", function () {
                    remove_injected();
                    inject(filename);
                });
            })
    });

function inject(filename) {
    script_path = "src/" + filename.replace(/ /g, "-") + ".js";
    var new_script = d3.select("body").append("script").attr("src", script_path);
    console.log("injected: " + script_path);
}

function remove_injected() {
    // add animation to the main part before all things (data, javscript injections) are ready
    // , like a 旋转的圈圈.
    // should also remove the binded listeners
    // remove failed
    var injected = d3.selectAll("script");
    console.log(injected.length);//undefined
    if (injected.length > 1) {
        var removed = injected.remove(1);
        console.log("removed: " + removed.attr("src"));
    }
}

// remove js or css file
function removejscssfile(filename, filetype) {
    var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none" //determine element type to create nodelist from
    var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none" //determine corresponding attribute to test for
    var allsuspects = document.getElementsByTagName(targetelement)
    for (var i = allsuspects.length; i >= 0; i--) { //search backwards within nodelist for matching elements to remove
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
            allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
}