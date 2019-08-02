// this function is triggered by onload on body tag 
      // updates url params 
      function updateParams() {
  
        let hrefLinks = [];
        // update href 
        // if window.location.search != "", update this page's a href links with current params
        if (window.location.search != "") {
  
          hrefLinks = document.getElementsByClassName("pure-menu-link");
  
          // iterate over hrefLinks and append current params
          for (let i = 0; i < hrefLinks.length; i++) {
  
            // append params
            hrefLinks[i].href = hrefLinks[i].href + window.location.search;
          }
        } else {
          // console.log("no additional params exist");
        }
      }

      // <!-- Get current params, if any, at the docsie home page to append to signup-widget query params -->


        // for appending existing params, if any
        function updateReqParams() {
            // if there exists any query params in docsie home page
            // append it form action url
            if (window.location.search != "" && window.location.search != undefined && window.location.search != null) {

                var existingParamsArray = [], multipleParamsArray = [];

                // get current url get-params
                if (window.location.search.indexOf("&") != -1) {
                    multipleParamsArray = window.location.search.split("?")[1].split("&");
                    multipleParamsArray.forEach(function (item) {
                        var splitItem = item.split("=");
                        existingParamsArray.push(splitItem[0]);
                        existingParamsArray.push(splitItem[1]);
                    });
                } else {
                    existingParamsArray = window.location.search.split("?")[1].split("=");
                }

                // create hidden input tags to append to form params
                for (let i = 0; i < existingParamsArray.length; i++) {

                    // continue at odd i value
                    if (i != 0 && i % 2 != 0)
                        continue;

                    // break at existingParamsArray.length
                    if (i == existingParamsArray.length - 1)
                        break;

                    var input = document.createElement("input");
                    input.setAttribute("type", "hidden");
                    input.setAttribute("name", existingParamsArray[i]);
                    input.setAttribute("value", existingParamsArray[i + 1]);
                    document.getElementById("signup-widget-form").appendChild(input);
                }
            }
        }

        // for checking validity of email and enabling/disabling 'triangle' button
        function setSubmit(id1, id2) {

            if (document.getElementById(id1).validity.valid == true) {
                document.getElementById(id2).disabled = false;
            } else {
                document.getElementById(id2).disabled = true;
            }
        }