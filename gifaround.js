/**
 * Welcome to the Looker Visualization Builder! Please refer to the following resources 
 * to help you write your visualization:
 *  - API Documentation - https://github.com/looker/custom_visualizations_v2/blob/master/docs/api_reference.md
 *  - Example Visualizations - https://github.com/looker/custom_visualizations_v2/tree/master/src/examples
 **/

const visObject = {
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
    var viz_gif = document.createElement("IMG");
    viz_gif.setAttribute("name", "gif");
    element.append(viz_gif);
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
  
    var search_string = Object.values(looker_data[0])[0]["value"];

    var xhr = new XMLHttpRequest();
    var request_url = "https://api.giphy.com/v1/gifs/search" +
                      "?api_key=ITAuSlrn0baNIHP6x3IMIMJxZHNiuLKr" +
                      "&q=" + search_string + 
                      "&limit=1" +
                      "&rating=g";
    console.log(request_url);
    xhr.open("GET", request_url);
    xhr.responseType = 'text';

    xhr.onload = function () {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
          var giphy_response = JSON.parse(xhr.response);
          var gif = document.getElementsByName("gif")[0];
          gif.setAttribute("src", giphy_response.data[0].images.original.url);
        }
      }
    };

    xhr.send(null);
    
    doneRendering()
  }
};

looker.plugins.visualizations.add(visObject);