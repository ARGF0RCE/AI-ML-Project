async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/api/energy");
    const data = await response.json();

    // Assume `data` is the JSON object loaded from your file
    const allIndiaData2022 = data["2022-2023"].filter(
      (record) => record.State.trim() === "All India"
    );

    // Convert peak_demand and peak_met to numbers and sort by Month
    const parsedData = allIndiaData2022
      .map((record) => ({
        ...record,
        peak_demand: +record.peak_demand,
        peak_met: +record.peak_met,
        Month: new Date(`01-${record.Month}`),
      }))
      .sort((a, b) => a.Month - b.Month);
    // Initialize SVG
    const svg = d3
      .select("#chart")
      .append("svg")
      .attr("width", 800)
      .attr("height", 600);

    // Create scales
    const xScale = d3
      .scaleTime()
      .domain(d3.extent(parsedData, (d) => d.Month))
      .range([50, 750]);

    const yScale = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(parsedData, (d) => Math.max(d.peak_demand, d.peak_met)),
      ])
      .range([550, 50]);

    // Create line generators
    const line1 = d3
      .line()
      .x((d) => xScale(d.Month))
      .y((d) => yScale(d.peak_demand));

    const line2 = d3
      .line()
      .x((d) => xScale(d.Month))
      .y((d) => yScale(d.peak_met));

    // Draw lines
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

    // Add axes
    svg
      .append("g")
      .attr("transform", "translate(0, 550)")
      .call(d3.axisBottom(xScale));

    svg
      .append("g")
      .attr("transform", "translate(50, 0)")
      .call(d3.axisLeft(yScale));

    console.log(data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

fetchData();
