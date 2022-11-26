import firebase from 'firebase'

const config = {
    projectId: 'nuxt-todo-7be9e'
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

export default firebase