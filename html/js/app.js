var serviceurl = "http://localhost:3000/api/";
$(function(){
	
	$.ajax({
		type: "GET",
		 url: serviceurl+"product/",
		 success: function(data) {
		 	if (data.Error===false) {
		 		var listdata='';
		 		if (data.Product.length>0) {
		 			listdata='<table class="table table-bordered table-striped table-actions"><thead>                                                <tr><th width="50">id</th><th>name</th> <th width="100">status</th><th width="100">Stock</th><th width="100">date</th></tr></thead><tbody>';

		 			data.Product.forEach( function (arrayItem,i)
					{
					    var status=arrayItem.status==0?'Inactive':'Active';
					    var sno=i+1;
					   listdata+='<tr id="trow_'+sno+'"><td class="text-center">'+sno+'</td><td><strong>'+arrayItem.name+'</strong></td>';
					  
					   listdata+='<td>'+status+'</td>';
					   listdata+='<td>'+arrayItem.noofstock+'</td><td>'+arrayItem.releasedate+'</td></tr>';
					});
		 			listdata+='</tbody></table>';
		 			$('#listproducts').html(listdata);
		 		}else{
		 			$('#listproducts').html("<p>No Record Found!!</p>");
		 		}
		 		
		 	}
		 	
		 }
	});

});

function register() {
	
		var str = $( "#jvalidate" ).serialize();
		$.ajax({
		    type: "POST",
		    url: serviceurl+"users",
		    data: str,
		    success: function(data) {
		    	console.log(data);
		        //var obj = jQuery.parseJSON(data); if the dataType is not specified as json uncomment this
		        // do what ever you want with the server response
		        if (data.Error===false) {
		        	window.location="login.html";
		        }
		    },
		    error: function() {
		        alert('error handing here');
		    }
		});

	}

function login() {
	
		var str = $( "#jvalidate" ).serialize();
		$.ajax({
		    type: "POST",
		    url: serviceurl+"login",
		    data: str,
		    success: function(data) {
		        if (data.Error===false && data.Users.length>0) {
		        	window.location="list.html";
		        }else{
		        	alert('Invalid credential');
		        }
		    },
		    error: function() {
		        alert('error handing here');
		    }
		});

	}



function addproduct(){

	var str = $('#productform').serialize();
	$.ajax({
		    type: "POST",
		    url: serviceurl+"/product",
		    data: str,
		    success: function(data) {
		    	console.log(data);
		        if (data.Error===false) {
		        	window.location="list.html";
		        }
		    },
		    error: function() {
		        alert('error handing here');
		    }
		});
}