import firebase from "firebase";
require("@firebase/firestore");


  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyDyDkpnNZjZEBwQild6KuYTXyFJXN1y7dM",
    authDomain: "projeto-71-30bb6.firebaseapp.com",
    projectId: "projeto-71-30bb6",
    storageBucket: "projeto-71-30bb6.appspot.com",
    messagingSenderId: "542320171891",
    appId: "1:542320171891:web:1f01bd707a73060b014306"
  };
  


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
