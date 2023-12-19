import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import './App.css'
import DashBoard from "./DashBoard"



function App() {

    return (
        <Router >
            <Routes>

                <Route path="/" element={<DashBoard />} />

            </Routes>
        </Router>
    )
}

export default App
