function computedStyle(node) {
  const computedStyles = getComputedStyle(node);
  var includedAttributes = [
    "font-family",
    "font-size",
    "font-weight",
    "fill",
    "stroke",
    "stroke-color",
    "stroke-width",
    "style",
    "text-anchor",
    "alignment-baseline",
    "transform",
    "transform-origin",
    "perspective",
    "perspective-origin",
    "opacity",
  ];
  return Object.values(computedStyles)
    .filter((key) => includedAttributes.indexOf(key) >= 0)
    .map((key) => `${key}:${computedStyles.getPropertyValue(key)};`)
    .join("");
}

function cloneWithInlineStyle(node) {
  var newNode = node.cloneNode(false);
  if (!["defs", "style"].some((tagName) => tagName === node.tagName)) {
    newNode.setAttribute("style", computedStyle(node));
  }
  while (newNode.firstChild) {
    newNode.removeChild(newNode.firstChild);
  }
  if (node && node.hasChildNodes()) {
    var child = node.firstChild;
    while (child) {
      if (child.nodeType === 1 && child.nodeName !== "SCRIPT") {
        newNode.appendChild(cloneWithInlineStyle(child));
      } else {
        newNode.appendChild(child.cloneNode());
      }
      child = child.nextSibling;
    }
  }
  return newNode;
}

export default {
  cloneWithInlineStyle,
};
