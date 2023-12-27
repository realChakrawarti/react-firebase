# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Current firestore security rule:

```
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /posts/{postId} {
    allow read;
    allow create, update: if request.auth.uid != null && request.resource.data.title != '';
    allow delete: if request.auth.uid == resource.data.user.uid;
    }
  }
}
```


### Deploying web app on firebase hosting

- Install firebase-tools globally -> `npm install -g firebase-tools`
- Login into firebase on CLI -> `firebase login``
- Initialize the project if haven't done previously -> `firebase init`
- Select the project if there is already one created
- Select this option for hosting -> Hosting: Configure files for Firebase Hosting
- The above step would create a `firebase.json` and `.firebaserc` file populate with default values
- Build the project -> `npm run build`
- Refer https://vitejs.dev/guide/static-deploy.html#google-firebase for deploying only the built directory `firebase.json` 
- firebase deploy --only hosting