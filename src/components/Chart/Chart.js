import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const maxArr = props.dataPoints.map((data) => data.value);
  const max = Math.max(...maxArr);

  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={max}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
