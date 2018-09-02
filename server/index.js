const  express =require("express");
import serverRenderer from './middleware/renderer';
import Loadable from "react-loadable";



const PORT = 3000;
const path = require("path");

const app = express();

const router =express.Router();

router.use("*", serverRenderer);
router.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' }));

app.use(router);

Loadable.preloadAll().then(()=>{
    app.listen(PORT, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Server is running ");
    })
})
