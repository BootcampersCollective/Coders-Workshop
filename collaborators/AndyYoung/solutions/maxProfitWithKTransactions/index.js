// Selection & Manipulation
// ============================================================================

d3.select();
d3.selectAll();
d3.select('h1').style('color', 'teal')
  .attr('class', 'heading')
  .text('MaxProfitsWithKTransactions');

d3.select('body').append('h2').text('Initial Models')
d3.select('body').append('h2').text('Possible Approaches')
d3.select('body').append('h2').text('Initial Build')

d3.selectAll('h2').style('color', "#757575")

// Data Loading & Binding
// ============================================================================

const dataSet = [1, 25, 24, 23, 12, 36, 14, 40, 31, 41, 5];

d3.select('body')
  .selectAll('p')
  .data(dataSet)
  .enter()
  .append('p')
  .text(d => d);


// Creating the Bar Chart
// ============================================================================







// ============================================================================
// ============================================================================
// ============================================================================