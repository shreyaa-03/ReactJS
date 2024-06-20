
export default function Post({postList}) {
  return (
    <div className="card" style={{width: "18rem"}}>
    <div className="card-body">
        <h5 className="card-title">{ postList.title}</h5>
      <p className="card-text">{ postList.body}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}

