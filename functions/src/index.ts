import { https } from 'firebase-functions'
import { firestore, initializeApp } from 'firebase-admin'
import { URL } from 'url'
import fetch from 'node-fetch'

initializeApp()

const db = firestore();
db.settings({
  timestampsInSnapshots: true
});

const usersRef = db.collection("users");
const get_ngrok = (user_id : number = 2) => usersRef.where('user_id', '==', user_id).limit(1).get();

export const linker = https.onRequest((request, response) => {
  get_ngrok()
  .then(user_doc => {
    const user = user_doc.docs[0].data();
    const url = new URL(request.path, user.ngrok);
    const address = url.toString();
    fetch(address)
    .then(() => console.log("Ok"))
    .catch(() => console.log("Error"));
    response.send(address);
  })
  .catch(()=>{
    response.send("Error ups");
  })
});
