import React, {useState} from 'react';
import './App.css';

/*
створти 2 інтупи і кнопку
перший відповідає за ендпоінт джсон плейсхолдера (перша частина енпоніту) другий- за айдішнік якщо другого ендпоінту нема- тягнемо весь список
потрібно зробити валідацію на перший інпут- чи ендпоінт існуючий
на другий-чи це число і чи воно в рамках 1-100
зробити версію на функціональній компоненті контрольовану і не контрольовану
якщо є час- на класовій компоненті теж таке саме написати

друга частина
inputs (for each create 2 versions- class based and functional based)
create controlled and uncontrolled select component
create controlled and uncontrolled checkbox
create controlled and uncontrolled radio
*/

const URL = 'https://jsonplaceholder.typicode.com';
const allEndpoints = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];

function App() {
    const [endpoint, setEndpoint] = useState('');
    const [id, setId] = useState('');

    const [arrays, setArrays] = useState([]);
    const [item, setItem] = useState(null);

    const onSubmit = () => {
        if (!allEndpoints.includes(endpoint)) {
            alert('Error in first input');
        }
        if ((!Number(id) || Number(id) < 1 || Number(id) > 100) && id !== '') {
            return alert('Error in second input');
        }

        fetchData();
    }

    const fetchData = async () => {
        const response = await fetch(`${URL}/${endpoint}/${id}`);
        const json = await response.json();

        if (id) {
            setItem(json);
            setArrays([]);
            return;
        }
            setArrays(json);
            setItem(null);
    };

  return (
    <div className="App">
       <div>
           <div className={'fetch'}>
               <h2>Fetch</h2>
               <input value={endpoint} type={'text'} name={'endpoint'}
                      onChange={({target: {value}}) => setEndpoint(value.trim().toLowerCase())}
                      placeholder={'posts/comments/albums/photos/todos/users'} />
               <input value={id} type={'text'} name={'id'}
                      onChange={({target: {value}}) => setId(value)}
                      placeholder={'1-100'} />
               <button onClick={onSubmit}>fetch data</button>
           </div>
           <hr />
            <div className={'result'}>
                {item && JSON.stringify(item, null, 5)}
            </div>
           <hr />
           <div className={'result'}>
               {arrays.map(value => <p key={value.id}>{value.title ?? value.name}</p>)}
           </div>
       </div>
    </div>
  );
}

export default App;
