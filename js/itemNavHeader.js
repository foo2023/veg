var patha = window.location.pathname; // get the current path
var paths = path.split("/"); // split the path by "/"
var item = "main"; // default value if no parent folder is found

// check if the path has a parent folder
if (paths.length > 2) {
  item = paths[paths.length - 2]; // get the second-to-last item in the path array
}

console.log(item); // output the result to the console
if (item === "item") {
    console.log("item")
} else {
}
