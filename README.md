### **Minimalistic React Redux boilerplate with Express backend**

---

This is a minimalistic yet scalable boilerplate, for developing web applications using React and Express backend server.

#### Usage

**Installation**

    git clone --depth 1 https://github.com/Vishnu-Dhanabalan/minimalistic-express-react-redux-boilerplate.git YOUR_PROJECT_FOLDER
    cd YOUR_PROJECT_FOLDER
    npm install

**Start developing**

    npm run dev

The frontend code is hot-reloadable using webpack's HMR and the backend uses nodemon and except `src/server/*` everything else is exempted from nodemon. After nodemon restarts, webpack's HMR seems to have stopped working so just refresh the browser again to resume HMR operation.

Configure settings using `configs/config.project.js` file

**Build the production**

    npm run prod

#### Useful packages installed

- Redux
- React Router
- Styled Components
