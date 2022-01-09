function traverse(node, visitor) {
  return traverseNode({ node, visitor });

  function traverseNode({ node, parent, visitor }) {
    const methods = visitor[node.type];

    if (methods?.enter) {
      methods.enter({ node, parent });
    }

    if (node.arguments) {
      traverseArray({ array: node.arguments, parent, visitor });
    }

    if (methods?.exit) {
      methods.exit({ node, parent });
    }
  }

  function traverseArray({ array, parent, visitor }) {
    array.forEach((node) => {
      traverseNode({ node, parent, visitor });
    });
  }
}

module.exports = { traverse };
