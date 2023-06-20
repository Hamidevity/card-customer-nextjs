import Link from "next/link"

function Layout({children}) {
  return (
    <>
    <header className="header">
      <h2>hamidevity crm</h2>
      <Link href="/add-customer">ADD Customer</Link>
    </header>
    <div className="main">
        {children}
    </div>
        <footer className="footer">
            <a href="https://github.com/Hamidevity " target="_blank" rel="noreferrer">Hamidevity next js crm project</a>
            Next js CRM project &copy;
        </footer>
    </>
  )
}

export default Layout
