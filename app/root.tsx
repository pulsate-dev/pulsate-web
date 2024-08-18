import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import "@radix-ui/themes/styles.css";
import "./styles/font.css";
import { Theme } from "@radix-ui/themes";
import type { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/config";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <I18nextProvider i18n={i18n.default}>
          <Theme>{children}</Theme>
        </I18nextProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
