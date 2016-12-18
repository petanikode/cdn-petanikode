function labelthumbs(json) {
    document.write('<ol id="label_with_thumbs">');
    for (var i = 0; i < numposts; i++) {
	var entry = json.feed.entry[i];
	var posttitle = entry.title.$t;
	var posturl;
	if (i == json.feed.entry.length) break;
	for (var k = 0; k < entry.link.length; k++) {
	    if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
		var commenttext = entry.link[k].title;
		var commenturl = entry.link[k].href;
	    }
	    if (entry.link[k].rel == 'alternate') {
		posturl = entry.link[k].href;
		break;
	    }
	}
	
	var thumburl;
	
	try {
	    thumburl = entry.media$thumbnail.url;
	} catch (error) {
	    s = entry.content.$t;
	    a = s.indexOf("<img");
	    b = s.indexOf("src=\"", a);
	    c = s.indexOf("\"", b + 5);
	    d = s.substr(b + 5, c - b - 5);
	    if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
		thumburl = d;
	    } else thumburl = 'http://3.bp.blogspot.com/-zP87C2q9yog/UVopoHY30SI/AAAAAAAAE5k/AIyPvrpGLn8/s1600/picture_not_available.png';
       }
       
       var postdate = entry.published.$t;
       var cdyear = postdate.substring(0, 4);
       var cdmonth = postdate.substring(5, 7);
       var cdday = postdate.substring(8, 10);
       var monthnames = new Array();
       monthnames[1] = "Jan";
       monthnames[2] = "Feb";
       monthnames[3] = "Mar";
       monthnames[4] = "Apr";
       monthnames[5] = "May";
       monthnames[6] = "June";
       monthnames[7] = "July";
       monthnames[8] = "Aug";
       monthnames[9] = "Sept";
       monthnames[10] = "Oct";
       monthnames[11] = "Nov";
       monthnames[12] = "Dec";
       document.write('<li class="clearfix">');
       
       if (showpostthumbnails == true)
	    document.write('<a href="' + posturl + '" target ="_top"><img class="label_thumb" src="' + thumburl + '"/></a>');
       
	document.write('<a href="' + posturl + '" target ="_top">' + posttitle + '</a>');
	
	if ("content" in entry) {
	    var postcontent = entry.content.$t;
	} else if ("summary" in entry) {
	    var postcontent = entry.summary.$t;
	} else var postcontent = "";
       
       var re = /<\S[^>]*>/g;
       postcontent = postcontent.replace(re, "");
       
       if (showpostsummary == true) {
	    if (postcontent.length < numchars) {
		 document.write('');
		 document.write(postcontent);
		 document.write('');
	    } else {
		 document.write('');
		 postcontent = postcontent.substring(0, numchars);
		 var quoteEnd = postcontent.lastIndexOf(" ");
		 postcontent = postcontent.substring(0, quoteEnd);
		 document.write(postcontent + '...');
		 document.write('');
	    }
       }
       
       var towrite = '';
       var flag = 0;
       //document.write('<br>');
       
       if (showpostdate == true) {
	    towrite = towrite + monthnames[parseInt(cdmonth, 10)] + '-' + cdday + ' - ' + cdyear;
	    flag = 1;
       }
       
       if (showcommentnum == true) {
	    if (flag == 1) {
		towrite = towrite + ' | ';
	    }
	
	    if (commenttext == '1 Comments') commenttext = '1 Comment';
	    if (commenttext == '0 Comments') commenttext = 'No Comments';
	    commenttext = '<a href="' + commenturl + '" target ="_top">' + commenttext + '</a>';
	    towrite = towrite + commenttext;
	    flag = 1;;
       }
       
       if (displaymore == true) {
	    if (flag == 1) towrite = towrite + ' | ';
	    towrite = towrite + '<a href="' + posturl + '" class="url" target ="_top">More »</a>';
	    flag = 1;;
       }
       
       document.write(towrite);
       document.write('</li>');
       if (displayseparator == true)
	    if (i != (numposts - 1))
		document.write('');
  
    }
    document.write('</ol>');
}
