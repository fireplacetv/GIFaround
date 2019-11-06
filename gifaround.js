/**
 * Welcome to the Looker Visualization Builder! Please refer to the following resources 
 * to help you write your visualization:
 *  - API Documentation - https://github.com/looker/custom_visualizations_v2/blob/master/docs/api_reference.md
 *  - Example Visualizations - https://github.com/looker/custom_visualizations_v2/tree/master/src/examples
 **/

import {$} from "https://code.jquery.com/jquery-2.2.4.min.js";
  
const visObject = {
  // import    "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js";
  // import    "https://cdnjs.cloudflare.com/ajax/libs/d3/4.13.0/d3.js";

 /**
  * Configuration options for your visualization. In Looker, these show up in the vis editor
  * panel but here, you can just manually set your default values in the code.
  **/
  options: {
    first_option: {
      type: "string",
      label: "My First Option",
      default: "Default Value"
    },
    second_option: {
      type: "number",
      label: "My Second Option",
      default: 42
    }
  },
 
 /**
  * The create function gets called when the visualization is mounted but before any
  * data is passed to it.
  **/
  create: function(element, config){
    element.innerHTML = "<h1>Ready to render!</h1>";
  },

 /**
  * UpdateAsync is the function that gets called (potentially) multiple times. It receives
  * the data and should update the visualization with the new data.
  **/
  updateAsync: function(looker_data, element, config, queryResponse, details, doneRendering){
    // set the dimensions and margins of the graph
    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    console.log(looker_data);
    const credentials = import("http://sonic.net/~derrick/temp/giphy_creds.json");
    
    var xhr = $.get("https://api.giphy.com/v1/gifs/random",
                    {"api_key": credentials.api_key});
    xhr.done(function(xhr_data) {
      var viz_gif = document.createElement("IMG");
      viz_gif.setAttribute("src", xhr_data.data.images.original.url);
      element.append(viz_gif);
    });    
    
    doneRendering()
  }
};

looker.plugins.visualizations.add(visObject);