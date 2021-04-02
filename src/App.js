import React, {useState, useRef, Component, createRef} from 'react';
import './App.css';

/*
!!створти 2 інтупи і кнопку
!!перший відповідає за ендпоінт джсон плейсхолдера (перша частина енпоніту) другий- за айдішнік якщо другого ендпоінту нема- тягнемо весь список
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

// 1 controlled function
/*function App() {
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

    const updateUserData = (e) => {
        const {target: {name, value}} = e;
        name === 'endpoint' ? setEndpoint(value.trim().toLowerCase()) : setId(value);
    };

  return (
    <div className="App">
        <div className={'fetch'}>
            <h2>Fetch</h2>
            <input value={endpoint} type={'text'} name={'endpoint'} onChange={updateUserData} placeholder={'posts/comments/albums/photos/todos/users'} />
            <input value={id} type={'text'} name={'id'} onChange={updateUserData} placeholder={'1-100'} />
            <button onClick={onSubmit}>fetch data</button>
        </div>
        <hr />
        <div className={'result'}>
            {item && JSON.stringify(item, null, 5)}
        </div>
        <hr />
        <div className={'result'}>
            {arrays.map(value => <p key={value.id}>{value.id} - {value.title ?? value.name}</p>)}
        </div>
    </div>
  );
} */

// 1 uncontrolled function
/*function App() {
    const endpoint = useRef();
    const id = useRef();

    const [item, setItem] = useState(null);
    const [arrays, setArrays] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();

        const end = endpoint.current.value.trim().toLowerCase();
        if (!allEndpoints.includes(end)) {
            alert('Error in first input');
        }

        const num = Number(id.current.value)
        if ((!num || num < 1 || num > 100) && id.current.value !== '') {
            return alert('Error in second input');
        }

        fetchData();
    };

    const fetchData = async () => {
      const response = await fetch(`${URL}/${endpoint.current.value.trim().toLowerCase()}/${id.current.value}`);
      const json = await response.json();

      if (id.current.value) {
          setItem(json);
          setArrays([]);
          return;
      }
        setArrays(json);
        setItem(null);

    };

    return (
        <div className="App">
            <form className={'fetch'} onSubmit={onSubmit}>
                <label>Fetch</label>
                <input ref={endpoint} type={'text'} name={'endpoint'} placeholder={'posts/comments/albums/photos/todos/users'} />
                <input ref={id} type={'text'} name={'id'} placeholder={'1-100'} />
                <button type={'submit'}>fetch data</button>
            </form>
            <hr />
            <div className={'result'}>
                {item && JSON.stringify(item, null, 1)}
            </div>
            <hr />
            <div className={'result'}>
                {arrays.map(value => <p key={value.id}>{value.id} - {value.title ?? value.name}</p>)}
            </div>
        </div>
    );
} */

// 1 controlled class
/*class App extends Component {
    state = {
        endpoint: '',
        id: '',
        item: null,
        arrays: []
    };

    updateUserData = (e) => {
        const {target: {name, value}} = e;
        name === 'endpoint' ? this.setState({endpoint: value.trim().toLowerCase()}) : this.setState({id: value});
    };

    onSubmit = () => {
        if (!allEndpoints.includes(this.state.endpoint)) {
            alert ('Error in first input');
        }

        if ((!Number(this.state.id) || Number(this.state.id) < 1 || Number(this.state.id) > 100) && this.state.id !== '') {
            return alert ('Error in second input');
        }

        this.fetchData();
    }

    fetchData = async () => {
      const response = await fetch(`${URL}/${this.state.endpoint}/${this.state.id}`);
      const json = await response.json();

      if (this.state.id) {
          this.setState({item: json, arrays: []});
          return;
      }
        this.setState({item: null, arrays: json});
    };

    render() {
        return (
            <div className="App">
                <div className={'fetch'}>
                    <h2>Fetch</h2>
                    <input value={this.state.endpoint} type={'text'} name={'endpoint'} onChange={this.updateUserData}
                           placeholder={'posts/comments/albums/photos/todos/users'} />
                    <input value={this.state.id} type={'text'} name={'id'} onChange={this.updateUserData}
                           placeholder={'1-100'} />
                    <button onClick={this.onSubmit}>fetch data</button>
                </div>
                <hr />
                <div className={'result'}>
                    {this.state.item && JSON.stringify(this.state.item, null, 2)}
                </div>
                <hr />
                <div className={'result'}>
                    {this.state.arrays.map(value => <p key={value.id}>{value.id} - {value.title ?? value.name}</p>)}
                </div>
            </div>
        );
    };
} */

// 1 uncontrolled class
/*class App extends Component {
    endpoint = createRef();
    id = createRef();

    state = {
        item:null,
        arrays: []
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!allEndpoints.includes(this.endpoint.current.value.trim().toLowerCase())) {
            alert ('Error in first input');
        }

        if ((!Number(this.id.current.value) || Number(this.id.current.value) < 1 || Number(this.id.current.value) > 100) && this.id.current.value !== '') {
            return alert ('Error in second input');
        }

        this.fetchData();
    };

    fetchData = async () => {
        const response = await fetch(`${URL}/${this.endpoint.current.value.trim().toLowerCase()}/${this.id.current.value}`);
        const json = await response.json();

        if (this.id.current.value) {
            this.setState({item: json, arrays: []});
            return;
        }
            this.setState({arrays: json, item: null});
    };

    render() {
        return (
            <div className="App">
                <form className={'fetch'} onSubmit={this.onSubmit}>
                    <h2>Fetch</h2>
                    <input ref={this.endpoint} type={'text'} name={'endpoint'} placeholder={'posts/comments/albums/photos/todos/users'} />
                    <input ref={this.id} type={'text'} name={'id'} placeholder={'1-100'} />
                    <button type={'submit'}>fetch data</button>
                </form>
                <hr />
                <div className={'result'}>
                    {this.state.item && JSON.stringify(this.state.item, null, 2)}
                </div>
                <hr />
                <div className={'result'}>
                    {this.state.arrays.map(value => <p key={value.id}>{value.id} - {value.title ?? value.name}</p>)}
                </div>
            </div>
        );
    };
} */

// 2 controlled function
/*function App() {
   const [state, setState] = useState({
       select: 'Select First',
       checkbox: [],
       radio: null
   });

   const updateUserData = (e) => {
       const {target: {name, value}} = e;
       setState({...state, [name]: value});
       if (name === 'checkbox') setState({...state, checkbox: [...state.checkbox, value]});
   };

   const onSend = (e) => {
       alert (JSON.stringify(state, null, 2));
   };

    return (
        <div className="secondTask">
            <h2>Inputs</h2>
            <select name={'select'} onChange={updateUserData} >
                <option>Select First</option>
                <option>Select Second</option>
            </select>
            <br />
            <input value={'checkbox first'} onChange={updateUserData} type={'checkbox'} name={'checkbox'}/> <label>Checkbox First</label>
            <input value={'checkbox second'} onChange={updateUserData} type={'checkbox'} name={'checkbox'}/> <label>Checkbox Second</label>
            <br />
            <input value={'radio first'} onChange={updateUserData} type={'radio'} name={'radio'}/> <label>Radio First</label>
            <input value={'radio second'} onChange={updateUserData} type={'radio'} name={'radio'}/> <label>Radio Second</label>
            <br />
            <button onClick={onSend}>send</button>
        </div>
    );
} */

export default App;
