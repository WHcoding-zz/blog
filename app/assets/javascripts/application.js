// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function indexSearch() {
	var x = document.getElementsByClassName('search-query');
	var request = new XMLHttpRequest();
    var timeout = false;
    var timer = setTimeout( function(){
        timeout = true;
        request.abort();
    }, 1000 );
    console.log(x[0]);
    request.open( "GET", 'products',true);
    request.onreadystatechange = function(){
        if( request.readyState !== 4 ) return;
        if( timeout ) return;
        clearTimeout( timer );
        if( request.status === 200 ){
        	var back_data = JSON.parse(request.responseText);
            console.log(typeof(back_data));
            var origin_dom = document.getElementsByClassName('table-hover')[0].getElementsByTagName("tbody")[0];
            var return_dom_tr = document.createElement("tr");
            console.log(return_dom_tr);
            return_dom_tr.className = "nihao ceshi";
            console.log(return_dom_tr);
            return_dom_tr.innerHTML = "<td>"+back_data.name+"</td>"+"<td>"+back_data.sex+"</td>";
            // var return_dom_tr_td = document.createElement("td")
            // return_dom_tr_td.innerHTML
            console.log(return_dom_tr);
            origin_dom.appendChild(return_dom_tr);
   //          xxx(return_dom_tr,"background","yellow");
   //          $(document).ready(function(){
			  
			//     // $("#div1").fadeOut();
			//     // $("#div2").fadeOut("slow");
			//     $(return_dom_tr).fadeOut(3000);
			// });
            // setTimeout(xxx(return_dom_tr,"background","blue"),5000);
            // clickMe(return_dom_tr);


            console.log(return_dom_tr);
            //.innerHTML('tbody')

            console.log(origin_dom);
        }
    }
    request.send( null );
}





function xxx(obj,str1,str2){
	// alert("xxxxxxxxxxx");
	$(obj).css(str1,str2);
}





// function clickMe(element){  
// 	    new Effect.Highlight(element,  
// 	    { startcolor:'#ffff00',  
// 	      endcolor:'#ffffff',  
// 	      duration: 2  
	       
// 	});
// }
