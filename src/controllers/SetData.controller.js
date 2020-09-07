const firebase = require('../db/firebase')



module.exports = {
    async store(req, res) {
        const { userName, email} = req.body;

        await firebase.FIRESTORE.collection('datas')
       .add({
           userName,
           email,
           createdAt: Date.now()
       }).then(() => {
           firebase.FIRESTORE.doc(`data/${userName}`).
           set({
            userName,
            email,
            createdAt: Date.now() 
           })
           return res.json({success: 'Olá, stá feito.'})
       }).catch(err => {
           return res.json(err)
       })
    },

   async getDatas(_, res) {
       await firebase.FIRESTORE.collection('datas')
       .get()
       .then(datas => {
           const userData = [];
           datas.forEach(doc => {
               userData.push(doc.data())
           });
           return res.json(userData)
       }).catch(err => {
           return res.json(err)
       })
   },
  async register(req, res) {
      const { email, password } = req.body;

      await firebase.AUTH.createUserWithEmailAndPassword(email, password)
      .then(user => {
          firebase.AUTH.currentUser.sendEmailVerification()
          return res.json(user)
      }).catch(err => {
          return res.json(err)
      })
  }
}