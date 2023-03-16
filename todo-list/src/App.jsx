import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BsFillCheckCircleFill, BsCheckLg } from "react-icons/bs";

const Todo = ({ title }) => {
  const [checked, setChecked] = useState(false);
  const inputRef = useRef();
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  return (
    <div
      className='flex justify-between mx-9 item-center'
      onClick={handleClick}
    >
      <p className='mb-2 text-sm'>{title}</p>
      <div className='flex item-center mt-1'>
        {checked ? <BsFillCheckCircleFill /> : <BsCheckLg />}
        {/* {todoList.length === 2 ? alert("yes") : alert("no")} */}
      </div>
      <input
        ref={inputRef}
        type='checkbox'
        className='hidden'
        onChange={(e) => setChecked(e.target.checked)}
      />
    </div>
  );
};

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className='bg-background h-screen w-screen pt-7.5'>
      <div className='bg-white w-300 h-510 mx-auto relative'>
        <div className='flex justify-between p-6 items-center'>
          <div className='flex items-center gap-2'>
            <p className='text-xl'>12</p>
            <div>
              <p className='text-xs'>January</p>
              <p className='text-xs'>2022</p>
            </div>
          </div>
          <div className='text-sm'>Tuesday</div>
        </div>
        <div>
          {todoList.map((todo) => {
            if (todo.length !== 0) {
              return <Todo title={todo} />;
            }
          })}
          <input
            autoFocus='autofocus'
            maxlength='22'
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className='mx-9 bg-transparent border-b-[.5px] border-slate-500 focus-visible:outline-none text-sm'
          />
        </div>
        <div className='absolute -bottom-6 flex justify-center w-full'>
          <button
            onClick={() => {
              const newList = [...todoList];
              newList.push(newTodo);
              if (newList.length <= 11) {
                setTodoList(newList);
                setNewTodo("");
              } else {
                alert("List is full.");
                console.log(confirm);
              }
            }}
            className='h-60 w-60 text-center rounded-100 text-35 font-medium pb-60 bg-enter text-plus focus-visible:outline-none '
          >
            +
          </button>
        </div>
      </div>
    </div>
  );

  //   <div className='bg-orange-400 h-10'>nav</div>
  //   <div className='bg-orange-300 h-20'>header</div>
  //   <div className='bg-orange-50 h-40'>content</div>
  //   <div className='bg-orange-100 h-20'>sign up</div>
  //   <div className='flex flex-col sm:flex-row'>
  //     <div className='bg-amber-400 flex-grow text-center h-20'>feature</div>
  //     <div className='bg-amber-300 flex-grow text-center h-20 '>feature</div>
  //     <div className='bg-amber-100 flex-grow text-center h-20'>feature</div>
  //   </div>
  // </div>
}

export default App;
