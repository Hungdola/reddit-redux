import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import EditPage from './components/Edit/EditPage';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import MakePost from './components/Posts/MakePost';
import Posts from './components/Posts/Posts';

function App() {
  const [isEdit, setIsEdit] = useState(false)
  const [isOpenPost, setIsOpenPost] = useState(false)
  const pending = useSelector((state) => state.user.pending)
  const error = useSelector((state) => state.user.error)
  return (
    <div className="App">
      {isEdit ? 
      (<EditPage setIsEdit={setIsEdit}></EditPage>)
       : !isEdit && !isOpenPost ? (
       <>
        <Header setIsEdit={setIsEdit}></Header>
        <div className='post-container'>
          <Posts></Posts>
        </div>
        <Footer isOpenPost={isOpenPost} setIsOpenPost={setIsOpenPost}></Footer>
       </>) : (
        <>
          <Header setIsEdit={setIsEdit}></Header>
          <MakePost setIsOpenPost={setIsOpenPost}></MakePost>
        </>
       )}

      {pending && <p className='loading'> Loading!!! </p>}
      {!isEdit && error && (
        <p className='error'> Error when fetching data from server!!!</p>
      )}
    </div>
  );
}

export default App;
