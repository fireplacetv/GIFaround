# GIFaround

Gifaround is a custom visualization for Looker that returns an animated GIF from GIPHY based
on the first item in your results.

## Installation

1. Go to https://[your-instance].looker.com/admin/visualizations and click Add New Visualization.
2. In the Main field, link to https://fireplacetv.github.io/JOIN2019/gifaround.js
3. Save changes

## Usage

When creating a Look, select Gifaround from the list of custom visualizations. Gifaround 
will search GIPHY for the first value in the first column of your results. By default it
returns the first GIF in the results. If you want a different GIF, you can specify the 
GIF you want by adjusting the Result Index in the visualization options.
