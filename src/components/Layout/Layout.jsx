import { Header } from "../Header/Header";

export function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
