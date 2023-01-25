import { useState } from 'react'
import confetti from 'canvas-confetti'
const TURNS = {
  X: 'X',
  O: 'O'
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const Square = ({ children, updateBoard, isSelected, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const hadleClick = () => {
    updateBoard(index) // pasmos el indice
  }
  return (
    <div onClick={hadleClick} className={className}>
      {children}
    </div>
  )
}

function App () {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board')// leyendo el localStorage
    return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const checkWinner = (boardToCheck /* tablero completo */) => {
    for (const combos of WINNER_COMBOS) {
      const [a, b, c] = combos // destructurin
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  const checkEndGame = (newBoard) => {
    // revisamos si hay empate
    // si no hay más espacios vacíos en el tablero

    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    // no se actualiza esta posición.
    if (board[index] || winner) return
    // actualizar el tablero
    const newBoard = [...board] // copiamos el board, para no mutar el estado directamente (tampoco se deberían mutar las props directamente)
    newBoard[index] = turn // se guarda el turno en el board en la posicion del indice en la copia.
    setBoard(newBoard) // cambiamos el board con lo antarior

    // cambiar le turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard)) // el local storage solo guarda strings asi qie hay que parcear el newBoard (console.log(typeof(JSON.stringify(newBoard))) === string ; typeof(newBoard) === object);
    window.localStorage.setItem('turn', newTurn)

    // revisar ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }
  return (
    <main className='board'>

      <h1 className='tic-tac-toe'>Tic tac toe</h1>

      <button onClick={resetGame}>Restart</button>

      <section className='game'>
        {
          board.map((e, index) => {
            return (
              <Square
                key={index}
                index={index} // indice del arreglo
                updateBoard={updateBoard}
              >
                {e}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>

        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>

        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>

      </section>

      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false ? 'Empate' : 'Ganó'
                }
              </h2>
              <header className='win'>
                {
                  winner &&
                    <Square>
                      {winner}
                    </Square>
                }
              </header>

              <footer>
                <button onClick={resetGame}>Restart</button>
              </footer>

            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
