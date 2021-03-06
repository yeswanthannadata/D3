const data = [
    {width: 200, height: 100, fill: 'purple'},
    {width: 100, height: 60, fill: 'pink'},
    {width: 50, height: 30, fill: 'red'}
];

const svg = d3.select('svg');

// d -> data, i -> index, n -> array of elements
const rect = svg.selectAll('rect')
    .data(data)

// updating the existed tags in DOM
rect.attr('width', (d,i,n) => d.width )
    .attr('height', d => d.height )
    .attr('fill', d => d.fill );

// creating un existed tags and updating the DOM
rect.enter()
    .append('rect')
    .attr('width', (d,i,n) => d.width )
    .attr('height', d => d.height )
    .attr('fill', d => d.fill );