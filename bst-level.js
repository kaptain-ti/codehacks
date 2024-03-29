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

  // Start of function levelOrder
  this.levelOrder = function(root) {
    var queue = [root];
    while (queue.length) {
      var treeNode = queue.shift();
      process.stdout.write(treeNode.data + " ");
      if (treeNode.left) queue.push(treeNode.left);
      if (treeNode.right) queue.push(treeNode.right);
    }
    // Add your code here
    // To print values separated by spaces use process.stdout.write(someValue + ' ')
  }; // End of function levelOrder
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

  tree.levelOrder(root);
});


// https://drive.google.com/open?id=1Y4S0-jaMchnSzLbv1TIHZoJIUOLAL-4Q
// https://drive.google.com/open?id=1Glc0OQZovaKilgm9fIvBp5_BOzb9_e6j
