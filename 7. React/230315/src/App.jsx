import { useEffect } from 'react'
import { AppRouter } from './routes'
import { Header } from './common'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryRequest } from './store/category'
import request from './utils/request'

const App = () => {
  const dispatch = useDispatch()
  const {loadding, error, data} = useSelector((state)=> state.category)

  useEffect(()=>{
    const payload = [
      {path:'/', name:'Home'},
      {path:'/counter', name:'counter'}
    ]

    dispatch(CategoryRequest('web7722'))
  },[dispatch])

  if(loadding) return <>Loadding...</>
  if(error) return <>{error}</>

  return (
    <>
      <Header items={data} />
      <AppRouter />
    </>
  );
}

export default App;
