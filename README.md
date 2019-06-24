# Firestore to Surix sync example

This is an example project that demonstrates how to sync data from a Firestore collection to a Surix project.
The code implements Firebase functions that listen to changes to a "tasks" collection and updates
the data in a Surix project accordingly.

To deploy this example you'll need a Firebase project as well as a Surix project.
You'll need to set some configuration so that the functions can talk to your Surix project.

Here are the config variables you'll need to set:

- `surix.key_id`: Your Surix API Key ID
- `surix.key_secret`: Your Surix API Key Secret
- `surix.project`: Your Surix Project ID


Set the config variables:

```
firebase functions:config:set surix.key_id="your Surix key id" surix.key_secret="your Surix key secret" surix.project="your Surix project id"
```

Set your firebase project in the `.firebaserc` file.

Then deploy:

```
firebase deploy --only functions
```

**Note**: Your Firebase project needs to be connected to a billing account in order to make requests to Surix.

All the sample code is in `functions/index.js`.


