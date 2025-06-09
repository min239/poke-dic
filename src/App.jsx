import { useState } from 'react'
import './App.css'
function App() {
   const [pokemons, setPoke] = useState([
      { id: 1, name: '피카츄', img: '/images/피카츄.png' },
   ])
   const [inputName, setInputName] = useState('')
   const [nextId, setNextId] = useState(2)

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

   const onRemove = () => {
      const nextPokes = pokemons.filter((poke) => poke.name !== inputName)
      setPoke(nextPokes)
   }

   const pokesList = pokemons.map((poke) => (
      <li key={poke.id}>
         <div>
            <img src={poke.img} alt={poke.name} width="130" />
            <p>{poke.name}</p>
         </div>
      </li>
   ))

   return (
      <>
         <h2>포켓몬 도감</h2>
         <input value={inputName} onChange={onChange}></input>
         <button onClick={onClick}>등록</button>
         <button onRemove={onRemove}>삭제</button>
         <ul>{pokesList}</ul>
      </>
   )
}

export default App
