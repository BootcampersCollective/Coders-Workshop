// Selection & Manipulation
// ============================================================================

d3.select();
d3.selectAll();
d3.select("h1")
  .style("color", "teal")
  .attr("class", "heading")
  .text("MaxProfitsWithKTransactions");

d3.select("body")
  .append("h2")
  .text("Initial Models");
d3.select("body")
  .append("h2")
  .text("Possible Approaches");
d3.select("body")
  .append("h2")
  .text("Initial Build");

d3.selectAll("h2").style("color", "#757575");

// Data Loading & Binding
// ============================================================================

const dataSet = [1, 25, 24, 23, 12, 36, 14, 40, 31, 41, 5];

d3.select("body")
  .selectAll("p")
  .data(dataSet)
  .enter()
  .append("p")
  .text(d => d);

// Creating the Bar Chart
// ============================================================================

const svgWidth = 900,
  svgHeight = 100,
  barPadding = 5;

// Just divide svgWidth by the number of data elements.
const barWidth = svgWidth / dataSet.length;

// Grad the svg & give it dimension.
const svg = d3
  .select("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Starts empty, because nothing is initially created.
const barChart = svg
  .selectAll("rect")
  .data(dataSet) // -> takes dataSet into 'waiting state'
  .enter() // -> takes data, performs operations on each item
  .append("rect") // now make the rectangle..
  .attr("y", d => svgHeight - d) // get y method, minus each datum from svgHgt
  .attr("height", d => d)
  .attr("width", barWidth - barPadding)
  .attr("transform", (d, i) => {
    let translate = [barWidth * i, 0];
    return `translate(${translate})`;
  });

// ============================================================================
// ============================================================================
