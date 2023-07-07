import { Navigate, Route, Routes } from "react-router";
import { ROUTES } from "./RoutesData";
import Dashboard from "../../pages/Dashboard/Dashboard";

export default function RoutesComponent() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to={ROUTES.DASHBOARD} />} />
			<Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
			<Route path="*" element={<Navigate to={ROUTES.DASHBOARD} />} />
		</Routes>
	);
}
