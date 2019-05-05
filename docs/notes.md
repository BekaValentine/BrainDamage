# Data Storage

Store everything in a flat file database, using directories to provide hierarchical structure (hardlinks for multi-parent children, symlinks for multi-parent parent backpointers and related pointers).

Each item gets a directory. Content goes in `content.<extension>`, title and other textual metadata goes in `meta_data/<field>`. Parent symlinks in `parents/`, child hardlinks in `children/`, related symlinks in `related/`.

# Shell Commands

```
bd-make-node :: Name -> IO NodeId
bd-delete-node :: NodeId -> IO ()

bd-get-note :: NodeId -> IO Text
bd-delete-note :: NodeId -> IO ()
bd-set-note :: NodeId -> Text -> IO ()

bd-list-metadata :: NodeId -> IO [MetaDataKey]
bd-get-metadata :: NodeId -> MetaDataKey -> IO Text
bd-set-metadata :: NodeId -> MetaDataKey -> Text -> IO ()
bd-delete-metadata :: NodeId -> MetaDataKey -> IO ()

bd-add-attachment :: NodeId -> FilePath -> IO ()
bd-link-attachment :: NodeId -> FilePath -> IO ()
bd-delete-attachment :: NodeId -> FilePath -> IO ()

bd-make-parent-child :: NodeId -> NodeId -> IO ParentChildId
bd-delete-parent-child :: NodeId -> NodeId -> ParentChildId -> IO ()
bd-list-parent-child-metadata :: NodeId -> NodeId -> ParentChildId -> IO [MetaDataKey]
bd-get-parent-child-metadata :: NodeId -> NodeId -> ParentChildId -> MetaDataKey -> IO Text
bd-set-parent-child-metadata :: NodeId -> NodeId -> ParentChildId -> MetaDataKey -> Text -> IO ()
bd-delete-parent-child-metadata :: NodeId -> NodeId -> ParentChildId -> MetaDataKey -> IO ()

bd-make-friends :: NodeId -> NodeId -> IO FriendsId
bd-delete-friends :: NodeId -> NodeId -> FriendsId -> IO ()
bd-list-friendsd-metadata :: NodeId -> NodeId -> FriendsId -> IO [MetaDataKey]
bd-get-friends-metadata :: NodeId -> NodeId -> FriendsId -> MetaDataKey -> IO Text
bd-set-friends-metadata :: NodeId -> NodeId -> FriendsId -> MetaDataKey -> Text -> IO ()
bd-delete-friends-metadata :: NodeId -> NodeId -> FriendsId -> MetaDataKey -> IO ()
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
