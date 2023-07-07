import HighlightCard from "./HighlightCard";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAt,
	faSquarePollVertical,
	faUsersViewfinder,
} from "@fortawesome/free-solid-svg-icons";
import DataVisualiser from "../../components/DataVisualiser/DataVisualiser";
import "./Dashboard.css";
import moment from "moment/moment";
import {
	resultsOverTimeData,
	shareOfCountriesData,
	shareOfCountriesPieData,
	shareOfLangaugePieData,
	shareOfLangaugesData,
	shareOfMediaData,
	shareOfSentimentData,
	shareOfSentimentPieData,
} from "./data";

export default function Dashboard() {
	const [hightlightCardData, setHighlightCardData] = useState();

	useEffect(() => {
		setHighlightCardData([
			{
				type: "Result",
				num: "12.6K",
				change: "-20",
				icon: <FontAwesomeIcon icon={faSquarePollVertical} />,
			},
			{
				type: "Unique Authors",
				num: "3.3K",
				change: "20",
				icon: <FontAwesomeIcon icon={faAt} />,
			},
			{
				type: "Engagement",
				num: "15.1K",
				change: "11",
				icon: <FontAwesomeIcon icon={faUsersViewfinder} />,
			},
		]);
	}, []);

	return (
		<div className="dashboard container-fluid">
			<div className="page-heading-cont">
				<div className="page-heading">Dashboard</div>
				<div className="date">
					{moment().format("DD/MM/YY hh:mm A")}
				</div>
			</div>
			<div className="row mb-4">
				<HighlightCard dataList={hightlightCardData} />
			</div>
			<div className="row mb-4">
				<div className="col-12">
					<div className="main-card">
						<div className="heading">Results Over Time</div>
						<div className="graph">
							<DataVisualiser
								option={resultsOverTimeData}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-6 mb-4">
					<div className="main-card">
						<div className="heading">Share Of Sentiment</div>
						<div className="graph">
							<DataVisualiser
								option={shareOfSentimentData}
							/>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6 mb-4">
					<div className="main-card">
						<div className="heading">
							Share Of Countries/Regions
						</div>
						<div className="graph">
							<DataVisualiser
								option={shareOfCountriesData}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 col-md-6 mb-4">
					<div className="main-card">
						<div className="heading">Share Of Langauges</div>
						<div className="graph">
							<DataVisualiser
								option={shareOfLangaugesData}
							/>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6 mb-4">
					<div className="main-card">
						<div className="heading">
							Share Of Media Types
						</div>
						<div className="graph">
							<DataVisualiser option={shareOfMediaData} />
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6 mb-4">
					<div className="main-card">
						<div className="heading">Share Of Langauges</div>
						<div className="graph">
							<DataVisualiser
								option={shareOfSentimentPieData}
							/>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6 mb-4">
					<div className="main-card">
						<div className="heading">
							Share Of Countries/Regions
						</div>
						<div className="graph">
							<DataVisualiser
								option={shareOfCountriesPieData}
							/>
						</div>
					</div>
				</div>
				<div className="col-12 col-md-6 mb-4">
					<div className="main-card">
						<div className="heading">Share Of Langauges</div>
						<div className="graph">
							<DataVisualiser
								option={shareOfLangaugePieData}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
