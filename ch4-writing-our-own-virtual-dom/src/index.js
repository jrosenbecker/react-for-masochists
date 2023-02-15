/** @jsx jsxToJS */

// Credit to this article - which walked me through writing my own Virtual DOM: https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060

function jsxToJS(type, props, ...children) {
  return { type, props, children }
}


/**
 * Ground Rules:
 *    Variables starting with $ are REAL DOM nodes
 *    The virtual DOM representation is the variable 'node'
 *    There is only one root node
 */
function createElement(node) {
  // If our node is some text, create a simple text node and return it
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  // Otherwise, create the element, recursively create children, and append them
  // to the parent node
  const $el = document.createElement(node.type);
  node.children
    .map(createElement)
    .forEach($el.appendChild.bind($el));

  return $el;
}

function changed(node1, node2) {
  return typeof node1 !== typeof node2 ||
         typeof node1 === 'string' && node1 !== node2 ||
         node1.type !== node2.type
}

function updateElement($parent, newNode, oldNode, index = 0) {
  // If there is no old node, then we have to create the noe
  if (!oldNode) {
    $parent.appendChild(createElement(newNode))
  }

  // If there is no new node at the current place in the DOM tree, we need to remove it from the real DOM
  else if (!newNode) {
    $parent.removeChild(
      $parent.childNodes[index]
    )
  }

  // 
  else if (changed(newNode, oldNode)) {
    $parent.replaceChild(
      createElement(newNode),
      $parent.childNodes[index]
    );
  }

  // We then need to run through each of our children and call updateElement on each of them.
  else if (newNode.type) {
    const newLength = newNode.children.length;
    const oldLength = newNode.children.length;
    for (let i = 0; i < newLength || i < oldLength; i++) {
      updateElement(
        $parent.childNodes[index],
        newNode.children[i],
        oldNode.children[i],
        i
      )
    }
  }
}

const a = (
  <div>
    <div>My name is:</div>
    <ul class="list">
      <li>First: Joe</li>
      <li>Last: Rosenbecker</li>
    </ul>
  </div>
)

const b = (
  <div>
    <div>My name is:</div>
    <ul class="list">
      <li>First: Joe</li>
      <li>Last: Ribsandburgers</li>
    </ul>
  </div>
)


const $root = document.getElementById('root');
const $changeDomButton = document.getElementById('changeTheDom');


// 1. Initialize with component state A (our Virtual DOM representation of the DOM state)
// 2. Define a new virtual DOM component state B, and on button click update the root virtual DOM
// 3. We should see that the DOM updates, and only the <li> for the last name should rerender in the DOM - as that is the only thing that is different
updateElement($root, a);
$changeDomButton.addEventListener('click', () => {
  updateElement($root, b, a);
})