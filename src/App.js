import React from 'react';
import './App.css';
import axios from 'axios'
function App() {
  const [name, setName] = React.useState('')
  const [age, setAge] = React.useState()
  const [users, setUsers] = React.useState([])

  const API_URL = 'https://crudcrud.com/api/5504f17568664cbf93b9ac8719a41b43/users'
  const handleSubmit = (event) => {
    event.preventDefault()

    axios.post(API_URL, {
      nombre: name,
      edad: age
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

  }
  React.useEffect(() => {
    axios.get(API_URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err))
  }, [users])
  return (
    <div className="App">
      <h2>Crear un User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" onChange={(event) => setName(event.target.value)} />
        <input type="number" placeholder="Edad" onChange={(event) => setAge(event.target.value)} />
        <button type="submit">Enviar</button>
      </form>
      {
        users.map((user) => {
         return <h4>{user.nombre}</h4>
        })
      }
    </div>
  );
}

export default App;
