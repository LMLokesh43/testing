import { increment, decrement } from 'store/actions/counter.actions'
// import Counter from 'components/counter/Counter'
// import { AppState } from 'store/store'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'

// import Icon from 'components/icon/Icon'

interface CounterProps {
  count: number
  add: () => void
  remove: () => void
}

const Counter: React.SFC<CounterProps> = ({ count, add, remove }) => {
  const onAdd = () => add()
  const onRemove = () => remove()
  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={onAdd}>
        Add
      </button>
      <button onClick={onRemove}>
        Remove
      </button>
    </>
  )
}

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  add: () => dispatch(increment),
  remove: () => dispatch(decrement),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)