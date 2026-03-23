import { Outlet } from "react-router";
import Navbar from "./components/navbar/navbar.component.jsx";

export default function Root() {
  return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />

          <title>Hello, world!</title>

          <meta name="viewport" content="width=device-width,initial-scale=1" />

          <meta name="description" content="" />
        </head>

        <body>
          <Navbar />
          <main>
            <Outlet />
          </main>
        </body>
      </html>
  );
}
