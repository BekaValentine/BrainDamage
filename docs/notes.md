# Data Storage

Store everything in a flat file database, in a relatively easy to edit format. Perhaps just CSV.

# Main Interactions

- create a node w/o reference to another node
- create a node related to the current node (parent of, child of, sibling of, related to)
- delete a node
- navigate to related node
- edit node metadata
- add relationship between nodes
- delete relationship between nodes
- search nodes by content or metadata

# Tables

- Definitions
  - Nondirectional Edges
  - Directional Edges
  - Columns:
    - id
    - name
    - is_directed
    - description
- Data
  - Entry
    - Columns:
      - id
      - name
      - content
  - Edges
    - Columns:
      - id
      - edge_type_id
      - entry_1_id
      - entry_2_id