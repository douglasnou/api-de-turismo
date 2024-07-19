import "dotenv/config";
import { app } from "./src/app.js";

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`This API was started at ${PORT}`);
});

//