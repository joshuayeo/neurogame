var invx_sel = [], ifindings = '', score = 0, invxState = 0;

var clear_invx = document.createElement("button");
clear_invx.innerHTML = "Clear Investigations";

clear_invx.addEventListener ("click", function(){
    invx_sel = [];
    $('#invx_list').empty();
});

var submit_invx = document.createElement("button");
submit_invx.innerHTML = "Submit Investigations";
submit_invx.addEventListener ("click", function(){
    $.each(invx_sel, function(i,v) {
           if (Object.keys(invxFindings).indexOf(v) >= 0){
        if (invxState < 1) {
            score += invxPoints[v];
            console.log(score);
            tScore = "Score: " + score
            $('#score').text(tScore);
            f_I = invxFindings[v];
            ifindings = ifindings + v + ': ' + f_I + '.\n';
        }
    };
    alert(ifindings);
    invxState += 1;
});
});

var clearInvx = $("#clearInvx");
clearInvx.append(clear_invx);
clearInvx.append(submit_invx);

$('#invxtree').jstree({
  "core" : {
    "animation" : 0,
    "check_callback" : true,
    "themes" : { "stripes" : true },
    'data' : invxtreeData,
  },
  "types" : {
    "#" : {
      "max_children" : 1,
      "max_depth" : 4,
      "valid_children" : ["root"]
    },
    "root" : {
      "icon" : "/static/3.3.4/assets/images/tree_icon.png",
      "valid_children" : ["default"]
    },
    "default" : {
      "valid_children" : ["default","file"]
    },
    "file" : {
      "icon" : "glyphicon glyphicon-file",
      "valid_children" : []
    }
  },
  'checkbox': {
   'visible': true,    
  },
  "plugins" : [
    "checkbox", "types", "wholerow"
  ]
});

$('#invxtree').on('select_node.jstree', function(evt, data) {
    if (data.node.children.length <= 1 && (invx_sel.indexOf(data.node.text) == -1) && invx_sel.length < 3) { invx_sel.push(data.node.text) }; 
    $('#invx_list').html(invx_sel.join(', '));
    
});
