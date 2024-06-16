import style from '../css/AddTodo.module.css'
export default function AddTodo() {
  return (
    <div className="container text-center">

        <div className={` ${style['kg-row']} row `}>
                  <div className="col-6">
                      <input type="text" placeholder="Enter todo here" />
          </div>
                  <div className="col-4">
                      <input type="date" name="" id="" />
          </div>
                  <div className="col-2">
                  <button type="button" className={`${style['kg-button']} btn btn-success`}>Add</button>
          </div>
              </div>

    </div>
  )
}
