import { useSelector, useDispatch } from 'react-redux'
import NewAnecdote from './components/NewAnecdote'
import { increaseVote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector((state) => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(increaseVote(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>

      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}

      <NewAnecdote />
    </div>
  )
}

export default App
