
import { Suspense, useState } from 'react'
import FetchTodo from './components/FetchTodo'
import Form from './components/Form'
import Form2 from './components/Form2'
import Count from './components/Count'
import Home from './components/Home'
import Posts from './components/Posts'
import Contact from './components/Contact'
import { useTransition } from 'react'

const App = () => {

  const [activeTab , setActiveTab] = useState("home");

  const [isPending , startTransition] = useTransition();

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />
      case "posts":
        return <Posts />  
      case "contact":
        return <Contact />
      default:
        <Home />
    }
  }

  const handleTabChange = (tab) => {
    startTransition(() => {
        setActiveTab(tab)
    })
  }


  return (
    // <Suspense fallback={<p>Loading...</p>}>
    //  <FetchTodo />
    // </Suspense>

    // <div>
    //   {/* <Form /> */}
    //   {/* <Form2 /> */}
    //   {/* <Count /> */}


    // </div>

    <div>
      <div className='tabs'>
      <button onClick={() => handleTabChange('home')}>Home</button>
      <button onClick={() => handleTabChange("posts")}>Posts</button>
      <button onClick={() => handleTabChange("contact")}>Contact</button>
    </div>


    {isPending && <p>Loading...</p> }

    <div className='content'>
        {renderContent()}
    </div>
    </div>
  )
}

export default App
