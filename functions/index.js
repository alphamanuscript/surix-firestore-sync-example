const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const surix = require('@surix/client');

const SURIX_KEY_ID = functions.config().surix.key_id;
const SURIX_KEY_SECRET = functions.config().surix.key_secret;
const SURIX_PROJECT = functions.config().surix.project;

// initialize Surix client and project
const client = new surix.Client({
    keyId: SURIX_KEY_ID,
    keySecret: SURIX_KEY_SECRET,
});

const project = client.project(SURIX_PROJECT);

exports.createTask = functions.firestore
    .document('tasks/{taskId}')
    .onCreate((snap, context) => {
        const entity = {
            _id: snap.id,
            data: snap.data(),
            tags: ['tasks']
        };
        return project.entities.put(entity);
    });

exports.updateTask = functions.firestore
    .document('tasks/{taskId}')
    .onUpdate((change, context) => {
        const entity = {
            _id: change.after.id,
            data: change.after.data(),
            tags: ['tasks']
        };
        return project.entities.put(entity);
    })

exports.deleteTask = functions.firestore
    .document('tasks/{taskId}')
    .onDelete((snap, context) => {
        return project.entities.delete(snap.id)
    });

