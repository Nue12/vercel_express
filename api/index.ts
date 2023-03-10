import express, { Request, Response } from "express";
import dotenv from "dotenv";
const app = express();
const port = 3000;

dotenv.config();
const apiUrl = process.env.API_URL;
app.use(express.static("public"));

const html = `
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <script type="text/javascript">
        localStorage.setItem('apiUrl', '${apiUrl}')
        window.location.href = "/"
    </script>
  </body>
</html>
`;

app.get("/api", (req: Request, res: Response) => {
  res.send(html);
});

app.get("/api/users", (req: Request, res: Response) => {
  res.send({ name: "user1", email: "user1@gmail.com", age: 30 });
});

app.listen(port, () => {
  console.log("app is listening on ", port);
});
