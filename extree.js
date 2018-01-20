var ex_sel = [], stem, exPoints, exFindings, invxPoints, invxFindings, ddx = [], score = 0, efindings = '', exState = 0, invxState = 0, tScore = '', invx_sel = [], ifindings = '', invxState = 0, dx_sel = [], rightDx = [], dxState = 0, dxresult = '', dx_data = {} ;

document.getElementById('dxtree').style.visibility = 'hidden';
document.getElementById('dxButtons').style.visibility = 'hidden';
var clear_ex = document.createElement("button");
clear_ex.innerHTML = "Clear Examinations";
clear_ex.addEventListener ("click", function(){
    ex_sel = [];
    $('#ex_list').empty();
});

var submit_ex = document.createElement("button");
submit_ex.innerHTML = "Submit Examinations";
submit_ex.addEventListener ("click", function(){
    $.each(ex_sel, function(i,v){
           if (Object.keys(exFindings).indexOf(v) >= 0){
        if (exState < 1) {
            score += exPoints[v];
            console.log(score);
            tScore = "Score: " + score
            $('#score').text(tScore);
            f_I = exFindings[v];
            efindings = efindings + v + ': ' + f_I + '.\n';
        }
    };
});
    
    alert(efindings);
    exState += 1; //to detect if it is the first time player has pressed 'submit examinations'
});

var start_game = document.createElement("button");
start_game.innerHTML = "Start New Game";
start_game.addEventListener ("click", function(){
    newCase();
    alert(stem);
});

var startGame = $('#topRightButtons');
startGame.append(start_game);


var show_stem = document.createElement("button");
show_stem.innerHTML = "Show Stem";
show_stem.addEventListener ("click", function(){
    alert(stem);
});

startGame.append(show_stem);

var clear_dx = document.createElement("button");
clear_dx.innerHTML = "Clear Diagnosis";
clear_dx.addEventListener ("click", function(){
    dx_sel = [];
    $('#dx_list').empty();
});

var submit_dx = document.createElement("button");
submit_dx.innerHTML = "Submit Diagnosis";
submit_dx.addEventListener ("click", function(){
    /*$.each(dx_sel, function(i,v){
            */
    if (dxState < 1) {
                if (rightDx == dx_sel[0]){
                        score += 3;
                        console.log(score);
                        tScore = "Score: " + score;
                        $('#score').text(tScore);
                        dxresult = 'You got the right answer!';
        }
                else {
                    dxresult = 'You got it wrong... Try another case?';
                    
                }
                alert(dxresult);
    };
//});
    
    
    dxState += 1;
});

dx_buttons = $('#dxButtons');
dx_buttons.append(clear_dx);
dx_buttons.append(submit_dx);

var show_dx = document.createElement("button");
show_dx.innerHTML = "Show Diagnoses";
show_dx.addEventListener ("click", function(){
    if (exState && invxState) {
        
        var dx_data = {
            'text': 'Diagnoses',
            'a_attr': {'class':'no_checkbox'},
            'children': ddx
        }

        // diagnosis tree
        $('#dxtree').jstree('destroy');
        $('#dxtree').jstree({
          "core" : {
            "animation" : 0,
            "check_callback" : true,
            "themes" : { "stripes" : true },
            'data' : dx_data,
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
            },
            "disabled" : {
            },
          },
          "plugins" : [
            "types", "wholerow"
          ]
        });
        document.getElementById('dxtree').style.visibility = 'visible';
        document.getElementById('dxButtons').style.visibility = 'visible';
        $('#dxtree').jstree(true).refresh();
        //$('#dxtree').jstree(true).core.data = dx_data;
        $('#dxtree').jstree(true).redraw(true);
        
        $('#dxtree').on('select_node.jstree', function(evt, data) {
            console.log("clicked");
            console.log(data.node);
            if (data.node.children.length <= 1 && (dx_sel.indexOf(data.node.text) == -1) && dx_sel.length < 1) { dx_sel.push(data.node.text) }; 
            $('#dx_list').html(dx_sel.join(', '));
            console.log(dx_sel);
        });
    }
    else {
        alert('You have not completed your examinations and investigations!');
    }
    
    
});

startGame.append(show_dx);

var clearEx = $("#clearEx");
clearEx.append(clear_ex);
clearEx.append(submit_ex);

$('#score').text(tScore);

// examinations tree

$('#extree').jstree({
  "core" : {
    "animation" : 0,
    "check_callback" : true,
    "themes" : { "stripes" : true },
    'data' : extreeData,
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
    },
    "disabled" : {
    },
  },
  "plugins" : [
      "types", "wholerow"
  ]
});


$('#extree').on('select_node.jstree', function(evt, data) {

    if (data.node.children.length <= 1 && (ex_sel.indexOf(data.node.text) == -1) && ex_sel.length < 3) { ex_sel.push(data.node.text) }; 
    $('#ex_list').html(ex_sel.join(', '));

});

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
            console.log(ifindings);
        }
    };
});
    
alert(ifindings);
invxState += 1;
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
  "plugins" : [
    "types", "wholerow"
  ]
});

$('#invxtree').on('select_node.jstree', function(evt, data) {
    if (data.node.children.length <= 1 && (invx_sel.indexOf(data.node.text) == -1) && invx_sel.length < 3) { invx_sel.push(data.node.text) }; 
    $('#invx_list').html(invx_sel.join(', '));
    
//for construction of list of selected examinations and tests that it is less than 3/ a valid choice/not duplicated    
});


var newCase = function() {
    document.getElementById('dxtree').style.visibility = 'hidden';
    document.getElementById('dxButtons').style.visibility = 'hidden';
    var caseNum = Math.floor(Math.random() * neurodata.length);
    var neurocase = Object.values(neurodata[caseNum])[0];
    stem = neurocase[0];
    exPoints = neurocase[1];
    exFindings = neurocase[2];
    invxPoints = neurocase[3];
    invxFindings = neurocase[4];
    ddx = neurocase[5];
    rightDx = neurocase[6];
    console.log(stem);
    console.log(neurocase);
    console.log(exPoints);
    console.log(exFindings);
    exState = 0;
    invxState = 0;
    dxState = 0;
    tScore = "Score: " + score;
    $('#score').text(tScore);
    ex_sel = [];
    dx_sel = [];
    invx_sel = [];
    $('#ex_list').empty();
    $('#invx_list').empty();
    efindings = ''; 
    ifindings = '';
};


