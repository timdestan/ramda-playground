const R = require('ramda');

const Node = (content, children) => ({
  content: content,
  children: children,
  map: f => Node(f(content), R.map(R.map(f), children))
});

// showWithIndent :: String -> Node -> String
const showWithIndent = R.curry((indent, node) =>
  `${indent}${node.content}\n` +
      R.map(showWithIndent(indent + '  '), node.children).join('')
);

// show :: Node -> String
const show = showWithIndent('');

const tree =
  Node('Hogwarts', [
    Node('House Gryffindor', [
      Node('Harry Potter', []),
      Node('Neville Longbottom', [])
    ]),
    Node('House Slytherin', [
      Node('Draco Malfoy', [])
    ]),
    Node('House Hufflepuff', []),
    Node('House Ravenclaw', [
      Node('Luna Lovegood', []),
      Node('Padma Patil', []),
    ])
  ]);

const upperCase = (s) => s.toUpperCase();

const modify = R.compose(upperCase, R.reverse);

console.log(show(R.map(modify, tree)));

// Output:
// STRAWGOH
//   RODNIFFYRG ESUOH
//     RETTOP YRRAH
//     MOTTOBGNOL ELLIVEN
//   NIREHTYLS ESUOH
//     YOFLAM OCARD
//   FFUPELFFUH ESUOH
//   WALCNEVAR ESUOH
//     DOOGEVOL ANUL
//     LITAP AMDAP
