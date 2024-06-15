/* eslint-disable react/prop-types */

export default function ErrorMessage({items}) {
    let emptyMessage = items.length === 0 && <h3>Still Hungry!!</h3> 
  return (
    <div>
      {emptyMessage}
    </div>
  )
}
