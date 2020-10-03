
//Probably go on index

// Interpretes input to Json , need work
let itemToSet = function (input) {
  return JSON.parse(input)
}

const props = {
  done: itemToSet('done'),
  finished: itemToSet('finished'),
  status: itemToSet('status'),
  todos: itemToSet('todos')

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
import PropTypes from 'prop-types'

const ThingsToDo = function (props) {
  return (
    <div className="ThingsToDo">
      <p className="lists">{props.list}</p>
      <p className="status">{props.status}</p>
    </div>
  )
}
ThingsToDo.PropTypes = {list: PropTypes.array, status: PropTypes.string}

// initially on the app side

