const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.check_user_name = functions.https.onCall((data, context) => {

  const ref = admin.firestore().collection('users').doc(data.name_to_check);
  return ref.get().then(doc => {
    return {
      unique: !doc.exists
    }
  }).catch(err => {
    throw new functions.https.HttpsError('failed to connect')
  });
});
