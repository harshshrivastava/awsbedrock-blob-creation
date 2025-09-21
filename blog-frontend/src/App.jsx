import GenerateBlog from './components/GenerateBlog/GenerateBlog'
import './App.css'
import GetBlog from './components/GetBlog/GetBlog'

export default function App() {
  return (
    <>
      <div className="app">
        <h1>My Blog Generator</h1>
        <GenerateBlog />
        <GetBlog />
      </div>
    </>
  )
}
