# Data Storage

Store everything in a flat file database, using directories to provide hierarchical structure (hardlinks for multi-parent children, symlinks for multi-parent parent backpointers and related pointers).

Each item gets a directory. Content goes in `content.<extension>`, title and other textual metadata goes in `meta_data/<field>`. Parent symlinks in `parents/`, child hardlinks in `children/`, related symlinks in `related/`.

# Main Interactions

- create a root node
- create a related node (parent of, child of, sibling of, related to)
- delete a node
- navigate to related node
- edit node metadata
- add relationship between nodes
- delete relationship between nodes
- search nodes by content or metadata
