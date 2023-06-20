import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>Botostart CRM</h2>
        <Link href="/add-customer">Add Customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="https://github.com/Hamidevity" target="_blank" rel="noreferrer" style={{textDecoration:"underline dotted"}}>
          Hamidevity
        </a>{" "}
        Next.js  | CRM Project &copy;
      </footer>
    </>
  );
}

export default Layout;
