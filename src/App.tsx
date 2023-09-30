import { Component } from "react";
import * as d3 from "d3";
import "./EnergyDashboard.css";

class EnergyDashboard extends Component {
  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:3000/api/energy");
      const data = await response.json();

      const allIndiaData2022 = data["2022-2023"].filter(
        (record: { State: string }) => record.State.trim() === "All India"
      );

      const parsedData = allIndiaData2022
        .map(
          (record: {
            peak_demand: string | number;
            peak_met: string | number;
            Month: any;
          }) => ({
            ...record,
            peak_demand: +record.peak_demand,
            peak_met: +record.peak_met,
            Month: new Date(`01-${record.Month}`),
          })
        )
        .sort(
          (a: { Month: number }, b: { Month: number }) => a.Month - b.Month
        );

      const svg = d3
        .select("#chart")
        .append("svg")
        .attr("width", 800)
        .attr("height", 600);

      const xScale = d3
        .scaleTime()
        .domain(parsedData.length ? (d3.extent(parsedData, (d: { Month: Date }) => d.Month) as [Date, Date]) : [])
        .range([50, 750]);

      const yScale = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(parsedData.filter((d: { peak_demand: number; peak_met: number; }) => d.peak_demand !== undefined && d.peak_met !== undefined), (d: { peak_demand: number; peak_met: number; }) => Math.max(d.peak_demand, d.peak_met)) as number,
        ])
        .range([550, 50]);

        const line1 = d3
          .line<{ Month: any; peak_demand: any; }>()
          .x((d) => xScale(d.Month) as number)
          .y((d) => yScale(d.peak_demand) as number);

        const line2 = d3
          .line<{ Month: any; peak_met: any; }>()
          .x((d: { Month: any; }) => xScale(d.Month) as number)
          .y((d: { peak_met: any; }) => yScale(d.peak_met) as number);

      svg
        .append("path")
        .datum(parsedData)
        .attr("d", line1)
        .attr("stroke", "blue")
        .attr("fill", "none");

      svg
        .append("path")
        .datum(parsedData)
        .attr("d", line2)
        .attr("stroke", "green")
        .attr("fill", "none");

      svg
        .append("g")
        .attr("transform", "translate(0, 550)")
        .call(d3.axisBottom(xScale));

      svg
        .append("g")
        .attr("transform", "translate(50, 0)")
        .call(d3.axisLeft(yScale));
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  render() {
    return (
      <div className="dashboard">
        <h1>Energy Dashboard</h1>
        <div id="chart"></div>
      </div>
    );
  }
}

export default EnergyDashboard;
