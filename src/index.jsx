import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ExploreAndPlan from "./pages/ExploreAndPlan";
import Extracurriculars from "./pages/Extracurriculars";
import FinancialAid from "./pages/FinancialAid";
import Login from "./pages/Login";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="explore" element={<ExploreAndPlan />} />
					<Route path="extracurriculars" element={<Extracurriculars />} />
					<Route path="finaid" element={<FinancialAid />} />
					<Route path="login" element={<Login />} />


				</Route>
			</Routes>
		</BrowserRouter>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);