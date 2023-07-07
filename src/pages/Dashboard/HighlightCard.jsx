import "./HighLightCard.css";
export default function HighlightCard({ dataList }) {
  console.log(dataList)
  
	return dataList?.map((data, i) => (
		<div className="col-12 col-md-4 mb-3" key={i}>
			<div className={`main-card highlight-card card-${i + 1}`}>
				<div className="content">
					<div className="type">{data.type}</div>
					<div className="num">{data.num}</div>
					<div className="change">
						{data.change}% from last week
					</div>
				</div>
				<div className="icon">
          {data.icon}
        </div>
			</div>
		</div>
	));
}
