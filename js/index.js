
var page_index = ["page-1", "page-2", "page-3",]; 


function page_option(pagename){
	var tar_index = page_index.indexOf(pagename);
	page_index.slice(tar_index, 1);
	for (var j = 0; j < page_index.length ; j++){
		var close_div = document.getElementsByClassName(page_index[j]);
		for (var i = 0; i<close_div.length;i++) {
			   close_div[i].style.display="none";
		};
	}
	
	var opendiv = document.getElementsByClassName(pagename);
	for (var i = 0; i<opendiv.length;i++) {
		   opendiv[i].style.display="block";
	};
}

function first_click(){
	page_option("page-1");
	document.getElementById('currentPage').value=1;
}

function last_click(){
	var total_page = document.getElementById('totalPage').value;
	page_option(page_index[page_index.length - 1]);
	document.getElementById('currentPage').value=total_page;
}

function prev_click(){
	var cur_page = document.getElementById('currentPage').value;
	if (cur_page > 1){
		document.getElementById('currentPage').value=parseInt(cur_page)-1;
		var pagename = page_index[parseInt(cur_page)-2];
		page_option(pagename);
	}
}

function next_click(){
	var cur_page = document.getElementById('currentPage').value;
	var total_page = document.getElementById('totalPage').value;
	if (cur_page < total_page){
		document.getElementById('currentPage').value=parseInt(cur_page) + 1;
		var pagename = page_index[parseInt(cur_page)];
		page_option(pagename);
	}
}

function choose_page(){
	var cur_page = document.getElementById('currentPage').value;
	var pagename = page_index[parseInt(cur_page)-1];
	page_option(pagename);
}

function light(obj){
	obj.firstElementChild.style.color="#FF9900";
}

function normal(obj){
	obj.firstElementChild.style.color="#000000";
}