import { useState } from 'react'
import './App.css'
function App() {
   const [pokemons, setPoke] = useState([
      { id: 1, name: '피카츄', img: '/images/피카츄.png' },
      { id: 2, name: '토게피', img: '/images/토게피.png' },
      { id: 3, name: '잠만보', img: '/images/잠만보.png' },
      { id: 4, name: '라프라스', img: '/images/라프라스.png' },
   ])
   const [inputName, setInputName] = useState('')
   const [nextId, setNextId] = useState(5)

   const onChange = (e) => setInputName(e.target.value)

   const onClick = () => {
      const nextPokes = pokemons.concat({
         id: nextId,
         name: inputName,
         img: '/images/' + inputName + '.png',
      })

      setPoke(nextPokes)
      setNextId(nextId + 1)
      setInputName('')
   }

   const onKeyDown = (e) => {
      console.log(e)
      if (e.key === 'Enter') {
         onClick()
      }
   }

   const onRemove = () => {
      const nextPokes = pokemons.filter((poke) => poke.name !== inputName)
      setPoke(nextPokes)
      setInputName('')
   }

   
   const pokesList = pokemons.map((poke) => (
      <li key={poke.id}>
         <div>
            <img src={poke.img} alt={poke.name} width="100%" />
            <p>{poke.name}</p>
         </div>
      </li>
   ))

   return (
      <>
         <h2>포켓몬 도감</h2>
         <input value={inputName} onChange={onChange} onKeyDown={onKeyDown}></input>
         <button onClick={onClick}>등록</button>
         <button onClick={onRemove}>삭제</button>
         <ul>{pokesList}</ul>
      </>
   )
}

export default App
