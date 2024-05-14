import app from './app';
import { prisma} from "database";
const port = 6000;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}  🚀`);
});