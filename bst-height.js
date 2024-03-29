function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
} // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
  this.insert = function(root, data) {
    if (root === null) {
      this.root = new Node(data);

      return this.root;
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else {
      if (root.right) {
        this.insert(root.right, data);
      } else {
        root.right = new Node(data);
      }
    }

    return this.root;
  };

  // Start of function getHeight
  this.getHeight = function(root) {
    if (root == undefined) {
      return -1;
    }
    // get the max of the between left and right
    var max = Math.max(this.getHeight(root.left), this.getHeight(root.right));

    return 1 + max;
    // Add your code here
  }; // End of function getHeight
} // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding("ascii");

var _input = "";

process.stdin.on("data", function(data) {
  _input += data;
});

process.stdin.on("end", function() {
  var tree = new BinarySearchTree();
  var root = null;

  var values = _input.split("\n").map(Number);

  for (var i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
  }

  console.log(tree.getHeight(root));
});

// https://drive.google.com/open?id=1KruQPkHHRtaSIGXsC2x531Avs-aiXHfc
// https://drive.google.com/open?id=1XVsHOLb1AN98WlKvlPa7i63po5M6Q77n
