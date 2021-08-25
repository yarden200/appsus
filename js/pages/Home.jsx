const { Link } = ReactRouterDOM

export function Home() {
  return (
    <section className="home">
      <h1>Welcome to Appsus</h1>
      <hr />
      <div className="nav">
        <Link to={"/keep"}>Keep</Link>
        <Link to={"/mail"}>Mail</Link>
      </div>


    </section>
  )
}