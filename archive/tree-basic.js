var Tree = function(value) {
    var newTree = Object.create(treeMethods);
    newTree.value = value;
    newTree.children = [];  
    return newTree;
  };
  
  
  let treeMethods = {};
  
    treeMethods.addChild = function(value) {
      let node = Tree(value);
      this.children.push(node)
      return node;
    };
  
    
    treeMethods.contains = function(target) {
      var result = false;
      var subroutine = function(node) {
        node.children.forEach(function(element) {
          if (element.value === target) result = true;
          if (element.children.length > 0) subroutine(element);
        });
      };
      subroutine(this);
      return result;
    };
  
  
  
  
  
  // module.exports = Stack;
  
  var tree = Tree();
  tree.addChild(1);
  tree.addChild(2);
  console.log(tree.contains(3));
  
  
  //UNIT TEST//
  // console.log(new LinkedList().removeHead);
  