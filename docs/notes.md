# Data Storage

Store everything in a flat file database, using directories to provide hierarchical structure (hardlinks for multi-parent children, symlinks for multi-parent parent backpointers and related pointers).

Each item gets a directory. Content goes in `content.<extension>`, title and other textual metadata goes in `meta_data/<field>`. Parent symlinks in `parents/`, child hardlinks in `children/`, related symlinks in `related/`.

# Shell Commands

```
make-node :: Name -> IO NodeId
delete-node :: NodeId -> IO ()

get-node-note :: NodeId -> IO Text
delete-node-note :: NodeId -> IO ()
set-node-note :: NodeId -> Text -> IO ()

list-metadata :: NodeId -> IO [MetaDataKey]
get-metadata :: NodeId -> MetaDataKey -> IO Text
set-metadata :: NodeId -> MetaDataKey -> Text -> IO ()
delete-metadata :: NodeId -> MetaDataKey -> IO ()

add-attachment :: NodeId -> FilePath -> IO ()
link-attachment :: NodeId -> FilePath -> IO ()
delete-attachment :: NodeId -> FilePath -> IO ()

make-parent-child :: NodeId -> NodeId -> IO ParentChildId
delete-parent-child :: NodeId -> NodeId -> ParentChildId -> IO ()
list-parent-child-metadata :: NodeId -> NodeId -> ParentChildId -> IO [MetaDataKey]
get-parent-child-metadata :: NodeId -> NodeId -> ParentChildId -> MetaDataKey -> IO Text
set-parent-child-metadata :: NodeId -> NodeId -> ParentChildId -> MetaDataKey -> Text -> IO ()
delete-parent-child-metadata :: NodeId -> NodeId -> ParentChildId -> MetaDataKey -> IO ()

make-friends :: NodeId -> NodeId -> IO FriendsId
delete-friends :: NodeId -> NodeId -> FriendsId -> IO ()
list-friendsd-metadata :: NodeId -> NodeId -> FriendsId -> IO [MetaDataKey]
get-friends-metadata :: NodeId -> NodeId -> FriendsId -> MetaDataKey -> IO Text
set-friends-metadata :: NodeId -> NodeId -> FriendsId -> MetaDataKey -> Text -> IO ()
delete-friends-metadata :: NodeId -> NodeId -> FriendsId -> MetaDataKey -> IO ()
```

# Main Interactions

- create a root node
- create a related node (parent of, child of, sibling of, related to)
- delete a node
- navigate to related node
- edit node metadata
- add relationship between nodes
- delete relationship between nodes
- search nodes by content or metadata
