/*
  Copyright (c) operating syste 2023
  -------------------------------------------------------------
                        
                        Written by ghgltggamer
                        
  --------------------------------------------------------------
*/

// Mouse object m: use to get the mouse position
const Mouse = {
  
  x(){
    
    var mouse;
    function get_X(event){
      var pos = event.clientX;
      mouse = pos;
    }
    get_X(event);
    
    return mouse;
    
  },
  
  
  y(){
    
    var mouse;
    function get_Y(event){
      var pos = event.clientY;
      mouse = pos;
    }
    get_Y(event);
    
    return mouse;
    
  },
  
  get_Pos(){
    var x = Mouse.x();
    var y = Mouse.y();
    var build = x + "," + y;
    return build;
  }
  
}


// uuid object : use to create uuid 
const uuid = {
  
  create(){
    var op_create_uuid = crypto.randomUUID();
    return op_create_uuid;
  }
  
}

// int function : use to convert a string to integer
function int (string_number){
  
  var gen = Number(string_number);
  return gen;
  
}


// code obhject: use to create random codes
const code = {
  generate(length){
    
    var code_val = "";
    
    for (var code_g = 1;code_g <= length;code_g++){
      
      var op_generate_random_code = Math.floor(Math.random()*10);
      code_val += op_generate_random_code;
      
    }
    
    var code_val_int = int(code_val);
    
    return code_val_int;
    
  }
}

// clicks object : use to get cps of a element (click per seconds)
var cli = 1;
var clicks_per_second;


const clicks = {
  
  count(id){
    
    // var cps_int = 0;
    // var time_int = int(clicks);
    function cl(){
      cli += 1;
      clicks_per_second = cli;
    }
    
    var op_get_clicks = document.getElementById(id).addEventListener("click", cl());
    var op_count_cps;
    
    // setTimeout(function(){
    // var op_count_cps = clicks / time_int;
    // real_time_cps = op_count_cps;
    // }, time_int)
    
    
    // l
    return clicks_per_second;
  },
  
}

// cache use to get and cache
utilise_cache =  document.getElementById("cache");
const cache = {
  clear(){
    utilise_cache.innerHTML = "";
  },
  utilise(text){
    document.getElementById("cache").innerHTML = text;
  },
  create(){
     document.body.innerHTML += "<div id='cache'></div>";
  }
}

// click function is use to click on a element
function click(id){
  document.getElementById(id).click();
}


// create object use to create different things 
const create = {
  cache(){
    document.body.innerHTML += "<div id='cache'></div>";
  }
}

// webpage object : use to open a web page with extreme power . browsers popup blockers can't stop this to open a webpage according to your needs 
const webpage = {
  
  open(url){
    
    // create.cache();
    
    utilise_cache.innerHTML = '<a href="' + url + '" id="op_open_webpage"></a>';
    document.getElementById("op_open_webpage").click();
    setTimeout(function(){
    cache.clear();
      
    }, 0500);
    
  }
  
}




// install function use to inatall any other tool , plugin etc which was created by operating syste , foz dtx corp , ghgltggamer for this API
const list = "list";
function install(plugin){
  if (plugin === "list"){
    cache.utilise('<script src="https://fozdtx.github.io/foz-dtx-libraries/ghgltggamer.js"></script> <script src="https://fozdtx.github.io/foz-dtx-libraries/libraries/foz%20dtx%20js%20library/versions/v0.0.1/fozdtx.js"></script>');
  }
  else {
    alert("ERROR (404) : Can't install any program which is not created by officials");
  }
}

/*
  dev version of Operating Syste API --0-1-1
  -------------------------------------------------------------------------
  
                      Finished at 17:03pm delhi/india
                          
  -------------------------------------------------------------------------
*/
