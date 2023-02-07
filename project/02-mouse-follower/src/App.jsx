import { useEffect, useState } from 'react'
const FolllowMouse = () => {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState(
    { x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientY, clientX } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enable) {
      window.addEventListener('pointermove', handleMove) // suscribe la obj window y mueve el puntero segun la función
    }
    // clean up
    // cuando el componente se desmonta o cuando cambian las dependencias antes de ejecutar el efecto
    return () => {
      window.removeEventListener('pointermove', handleMove) // remueve la subcripción al obj window
      setPosition({ x: 0, y: 0 })
    }
  }, [enable])
  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#333333',
        border: 'solid 1px #D51374',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => { setEnable(!enable) }}>
        {enable ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

function App () {
  const [mounted, setMounted] = useState(true)
  return (
    <main>
      {mounted && <FolllowMouse />}
      <button onClick={() => { setMounted(!mounted) }}>Toggle mounted FollowMouse component</button>
    </main>
  )
}

export default App
