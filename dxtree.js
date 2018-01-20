ddx = neurodata[5];
var dx_data = {
    'text': 'Diagnoses',
    'a_attr': {'class':'no_checkbox'},
    'children': ddx,
}


// diagnosis tree

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
  'checkbox': {
   'visible': true,    
  },
  "plugins" : [
    "checkbox", "types", "wholerow"
  ]
});