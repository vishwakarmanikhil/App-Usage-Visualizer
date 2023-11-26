import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './style.css';

const PieChart = ({ usageSessions }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(chartRef.current);
    const width = 150;
    const height = 150;
    const radius = Math.min(width, height) / 2;

    const pie = d3.pie()
      .sort(null)
      .value(1);

    const usages = usageSessions.map(usage => ({
      start: new Date(usage.start),
      end: new Date(usage.end)
    }));

    const pieData = pie(usages);

    const totalTime = 24 * 60 * 60 * 1000;
    const timeScale = d3.scaleLinear()
      .domain([0, totalTime])
      .range([0, 2 * Math.PI]);

    svg.attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    svg.select('g')
      .selectAll('.arc')
      .data(pieData)
      .enter()
      .append('g')
      .attr('class', 'arc')
      .each(function (d) {
        const arcStart = timeScale(d.data.start.getTime() % totalTime);
        const arcEnd = timeScale(d.data.end.getTime() % totalTime);

        const startAngle = Math.min(arcStart, arcEnd);
        const endAngle = Math.max(arcStart, arcEnd);

        const isClockwise = arcEnd >= arcStart;

        const arcGenerator = d3.arc()
          .innerRadius(radius - 25)
          .outerRadius(radius - 10)
          .cornerRadius(8);

        const innerRadius = radius - 40;

        let arcPath;

        // path direction based on clockwise or anticlockwise
        if (isClockwise) {
          arcPath = arcGenerator({
            startAngle,
            endAngle,
          });

          if (endAngle - startAngle > Math.PI) {
            arcPath += 'L' + arcGenerator({
              startAngle: endAngle,
              endAngle: startAngle,
              innerRadius,
            }) + 'Z';
          }
        } else {
          arcPath = arcGenerator({
            startAngle: endAngle,
            endAngle: startAngle + Math.PI * 2,
          });

          if (startAngle - endAngle > Math.PI) {
            // checking If the arc spans more than a semi-circle, create an inner arc as well
            arcPath += 'L' + arcGenerator({
              startAngle: startAngle + Math.PI * 2,
              endAngle: endAngle + Math.PI * 2,
              innerRadius,
            }) + 'Z';
          }
        }

        d3.select(this).append('path')
          .attr('d', arcPath)
          .attr('fill', '#845ec2')
          .attr('stroke', '#845ec2')
          .attr('strokeWidth', 0.1)
          .attr('d', arcPath);
      });

  }, [usageSessions]);

  return <svg ref={chartRef}></svg>;
};

export default PieChart;