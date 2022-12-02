import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/Tenders" element={<Tenders />} />
          <Route path="/BiderForm" element={<BiderForm />} />
          <Route path="/TenderAllocation" element={<TenderAllocation />} />
          <Route path="/DisplayAvailableTenders" element={<DisplayTenders />} />
          
          <Route path="/AvailableTenders" element={<AvailableTenders />} />
          <Route path="/TenderStatus" element={<TenderStatus />} />
          <Route path="/Approve" element={<Approve />} />
          
        </Routes>
      </Router>
    </div>
  )
}

export default App
