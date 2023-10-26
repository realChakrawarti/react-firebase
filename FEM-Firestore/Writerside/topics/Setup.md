# Setup

Setting up firebase:


Go to [firebase.google.com](https://www.firebase.google.com)

### Setting up firebase for your web application: 
- [https://firebase.google.com/docs/web/setup](https://firebase.google.com/docs/web/setup#available-libraries)
- Firebase available modules: [https://firebase.google.com/docs/web/setup#available-libraries](https://firebase.google.com/docs/web/setup#available-libraries)

### Creating a firestore
For security rules, select Test mode for development and Locked mode for production

### QuerySnapshot Properties & Methods
- docs: All the documents in the snapshot, _DocumentSnapshot_
- empty: Boolean value to let us know if the snapshot was empty
- metadata: Metadata about this snapshot, its source and local modification
- query: A reference to query that was fired
- size: No of documents in _QuerySnapshot_
- docChanges(): An array of the changes since the last snapshot
- forEach(): Iterates over the entire array of snapshots
- isEqual(): Lets you know if it matches another snapshot

### DocumentSnapshot Properties & Methods
- id: The id of the given document
- exists: Is this even a thing in the database? // Useful to check if the document exists for example profile data of a user
- metadata: Same as _QuerySnapshot_ field
- ref: A reference to the document location in the database
- data(): Gets all the fields of the object
- get(): Allows you to access a particular field on the object
- isEqual(): Useful for comparison