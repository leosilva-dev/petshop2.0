import 'dotenv/config';
import { app } from "./app";

app.listen(process.env.API_PORT, () => console.log(`\n server is running on port ${process.env.API_PORT}`));
