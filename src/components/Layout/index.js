import { MainHeader } from "./MainHeader";

export function Layout({ children, ...props }) {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
    </>
  );
}