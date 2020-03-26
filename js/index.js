$('input[type="checkbox"]'). click(function(){
    if($(this). prop("checked") == true){
    english=0;
    }
    else if($(this). prop("checked") == false){
    english=1;
    }
    })
    
    
    $(".default_option").click(function(){
      $(".dropdown ul").addClass("active");
      
    });
    
    $(".dropdown ul li").click(function(){
      var text = $(this).text();
      
      $(".default_option").text(text);
    
      if(text=="States"){
        $(".search_field input").attr("placeholder","eg. Gujarat , Maharashtra")
      }
    
      if(text == "Country"){
       $(".search_field input").attr("placeholder","eg. India, China")
      }
    
      $(".dropdown ul").removeClass("active");
      
    });
    
    $("#sBtn").click(function(){
    
        state = "";
        country = "";
        query = "";
    
        
    
        if($(".search_field input").attr("placeholder")=="eg. India, China"){
            country = $(".search_field input").val();
        }else{
            state=$(".search_field input").val().toLowerCase().trim();
        }
    
        
    
        if(state!=""){
            if(allStates.includes(state)){
                query=state;
            }
        }
    
        if(country!=""){
            query=country;
        }
    
       
    
        if(query!=""){
    
            document.getElementById("articleBox").innerHTML = '<div class="Welcome" style="text-align: center;">'+
               '<br><br><b>Please wait a little, while we load for you the best results.....</b></div>'
    
            query = query + english;
    
    
            $.ajax({
        method: 'POST',
        url: 'https://thisisahiddenurl.com?key1='+query
      }).done(function(data){
    
          console.log(data["body"])
    
           var info = JSON.parse(data["body"])
    
            numItems = Object.keys(info).length
    
            
    
            boxHtml = ""
    
            for(var i=0 ; i<numItems ; i++){
    
                summary = info[i]["summary"]
                title = info[i]["title"]
                img_url = info[i]["url"]
                Authors = info[i]["authors"]
                article_url = info[i]["url2"]
    
                if(Authors.length==0){
                    Authors="Agency"
                }
    
                if(i%2==0){
    
                    var htmlVal = eClause1+article_url+eClause2+img_url+eClause3+title+eClause4+summary+" "+eClause5+article_url+eClause6+" "+
                                           Authors+eClause7;
    
                    boxHtml += htmlVal;
                    
    
                }else{
    
                    var htmlVal = oClause1+title+oClause2+summary+oClause3+article_url+oCLause4+" "+Authors+" "+oClause5+img_url+oClause6;
    
                    boxHtml += htmlVal;
                    
                }
    
                
    
            }
    
            footerGap = '<div style="width:100%; height:40px"></div>'
    
            $("#articleBox").html(boxHtml+footerGap)
     
      })
    
        }else{
            alert("Please search valid indian states and countries or check your filter :)")
        }
        
    
    })
    
    // article url
    var eClause1 = '<div class="container" id="articleBox"> <div class="card card-plain card-blog"><div class="row"><div class="col-md-5">'+
          '<div class="card-header card-header-image"><a href=';
    
    // article image
    var eClause2 = '><img class="img" style="z-index: -1;" src=';
    
    // article title
    var eClause3 = ' height="300px" width="300px"></a><div class="colored-shadow" style="background-image: url(&quot;./assets/img/examples/card-blog4.jpg&quot;); opacity: 1;"></div></div>'+
              '</div><div class="col-md-7"><h6 class="card-category text-info">Covid 19</h6> <h3 class="card-title"><div>'
    
    // article summary
    var eClause4 = '</div></h3><p class="card-description">'
    
    // article url
    var eClause5 = '<a href=';
    
    // article author
    var eClause6 = ' >Read More </a></p><p class="author">by<a><b>'
    
    // final
    var eClause7 = '</b></a></p></div></div></div>' 
    
    // article title
    var oClause1 = '<div class="card card-plain card-blog"><div class="row"><div class="col-md-7"><h6 class="card-category text-success">'+
              'Corona Virus</h6><h3 class="card-title"><a >'
    
    // article text
    var oClause2 = '</a> </h3><p class="card-description">'
    
    // article url
    var oClause3 = '<a href='
    
    // article author
    var oCLause4 = '> Read More </a></p><p class="author">by<a><b>'
    
    // image url
    var oClause5 = '</b></a> </p></div><div class="col-md-5"> <div class="card-header card-header-image"><img class="img img-raised" src='
    
    // final
    var oClause6 = ' height="300px" width="300px"><div class="colored-shadow" style="background-image: url(&quot;./assets/img/office2.jpg&quot;); opacity: 1;"></div></div></div></div></div>'
    
    var english = 0 ;
    
    var allStates = ["arunachal pradesh","assam","bihar",
                        "andhra pradesh","chhattisgarh","goa","gujarat","haryana",
                "himachal pradesh","jharkhand","karnataka","kerala",
            "madhya pradesh","maharashtra","manipur","meghalaya",
        "mizoram","manipur","meghalaya","nagaland","odisha","orrisa",
    "punjab","rajasthan","sikkim","tamil nadu","telangana","tripura",
    "uttar pradesh","uttarakhand","west bengal","jammu and kashmir","jammu","kashmir",
    "delhi","chandigarh","daman","diu","silvassa","ladakh","puducherry",
    "lakshwadeep"];