var m_Classes = {};

function SetValue(p_class, p_key, p_type, p_value) {
    Debug("called");
    $( "#" + p_class + " #" + p_key+" input[name='"+ p_type+"']" ).val(p_value);

}

var debugconsole = document.getElementById("console")
function Debug(string) {
    var node = document.createElement("li");                 // Create a <li> node
    var textnode = document.createTextNode(string);         // Create a text node
    node.appendChild(textnode);
    debugconsole.appendChild(node);
}

function SendUpdate(s_Content) {
    WebUI.Call('DispatchEventLocal', 'CT:UpdateValue', s_Content);
}

function AddOption(p_class, p_key, p_type, p_value, p_min, p_max) {
    console.log("called " + p_class + " | " +  p_key  +  " | " + p_type +  " | " + p_value);
    if (m_Classes[p_class] == null) {
        m_Classes[p_class] = {};
        var node = document.createElement("li");                 // Create a <li> node
        var link = document.createElement("a");
        link.href = "#" + p_class;
        link.innerHTML=p_class;
        node.appendChild(link);
        document.getElementById("tabs").appendChild(node);
        var content = document.createElement("div");
        content.id = p_class;
        $(content).attr("name", p_class);
        document.getElementById("content").appendChild(content);
        $("#window").tabs("refresh");
    }
    if (m_Classes[p_class][p_key] == null) {
        m_Classes[p_class][p_key] = {};
        var nodeTitle = document.createElement("h2");
        nodeTitle.innerHTML = p_key;
        var contentNode = document.createElement("div");
        contentNode.id = p_key;
        $(contentNode).attr("name", p_key);
        $(contentNode).attr("type", p_type);
        document.getElementById(p_class).appendChild(nodeTitle);
        document.getElementById(p_class).appendChild(contentNode);

        var input = null;
        if (p_min == null){
            p_min = 0;
        }
        if (p_max == null){
            p_max = 1;
        }
        if (p_type == "bool") {
            input = document.createElement("input");
            $(input).attr("type", "checkbox");
            $(input).attr("name", p_type);
            $(input).attr("value", 1);
        }
        if (p_type == "float") {
            input = document.createElement("input");
            $(input).attr("type", "range");
            $(input).attr("name", p_type);
            $(input).attr("value", p_value);
            $(input).attr("min", p_min);
            $(input).attr("max", p_max);
            $(input).attr("step", 0.0001);
        }
        if (p_type == "Vec2") {
            // Sue me.
            var vec2 = p_value.split(":");
            var x = document.createElement("input");
            var y = document.createElement("input");
            $(x).attr("type", "range");
            $(x).attr("name", 'x');
            $(x).attr("value", vec2[0]);
            $(x).attr("min", p_min);
            $(x).attr("max", p_max);
            $(x).attr("step", 0.0001);

            $(y).attr("type", "range");
            $(y).attr("name", 'y');
            $(y).attr("value", vec2[1]);
            $(y).attr("min", p_min);
            $(y).attr("max", p_max);
            $(y).attr("step", 0.0001);

            document.querySelector("#" + p_class + " #" + p_key).appendChild(x);
            document.querySelector("#" + p_class + " #" + p_key).appendChild(y);
        }
        if (p_type == "Vec3") {
            // Sue me.
            var vec3 = p_value.split(":");
            var x = document.createElement("input");
            var y = document.createElement("input");
            var z = document.createElement("input");
            $(x).attr("type", "range");
            $(x).attr("name", 'x');
            $(x).attr("value", vec3[0]);
            $(x).attr("min", p_min);
            $(x).attr("max", p_max);
            $(x).attr("step", 0.0001);

            $(y).attr("type", "range");
            $(y).attr("name", 'y');
            $(y).attr("value", vec3[1]);
            $(y).attr("min", p_min);
            $(y).attr("max", p_max);
            $(y).attr("step", 0.0001);

            $(z).attr("type", "range");
            $(z).attr("name", 'z');
            $(z).attr("value", vec3[2]);
            $(z).attr("min", p_min);
            $(z).attr("max", p_max);
            $(z).attr("step", 0.0001);
            document.querySelector("#" + p_class + " #" + p_key).appendChild(x);
            document.querySelector("#" + p_class + " #" + p_key).appendChild(y);
            document.querySelector("#" + p_class + " #" + p_key).appendChild(z);
        }
        if (p_type == "Vec4") {
            // Sue me.
            var vec4 = p_value.split(":");
            var x = document.createElement("input");
            var y = document.createElement("input");
            var z = document.createElement("input");
            var w = document.createElement("input");

            $(x).attr("type", "range");
            $(x).attr("name", 'x');
            $(x).attr("value", vec4[0]);
            $(x).attr("min", p_min);
            $(x).attr("max", p_max);
            $(x).attr("step", 0.0001);

            $(y).attr("type", "range");
            $(y).attr("name", 'y');
            $(y).attr("value", vec4[1]);
            $(y).attr("min", p_min);
            $(y).attr("max", p_max);
            $(y).attr("step", 0.0001);

            $(z).attr("type", "range");
            $(z).attr("name", 'z');
            $(z).attr("value", vec4[2]);
            $(z).attr("min", p_min);
            $(z).attr("max", p_max);
            $(z).attr("step", 0.0001);

            $(w).attr("type", "range");
            $(w).attr("name", 'w');
            $(w).attr("value", vec4[3]);
            $(w).attr("min", p_min);
            $(w).attr("max", p_max);
            $(w).attr("step", 0.0001);

            document.querySelector("#" + p_class + " #" + p_key).appendChild(x);
            document.querySelector("#" + p_class + " #" + p_key).appendChild(y);
            document.querySelector("#" + p_class + " #" + p_key).appendChild(z);
            document.querySelector("#" + p_class + " #" + p_key).appendChild(w);
        }
        console.log(p_class + " | " + p_key);
        if(input != null) {
            document.querySelector("#" + p_class + " #" + p_key).appendChild(input);
        }
    }
    if (p_type == "bool") {
        if (p_value == "true") {
            $("#" + p_class + " #" + p_key + " input[name='" + p_type + "']").attr("checked", "checked");
            //$("#"+p_class+" #"+ p_type+" input[name='"+ p_key +"']" ).val(p_value);
        } else {
            $("#" + p_class + " #" + p_key + " input[name='" + p_type + "']").removeAttr("checked");
        }
    }
    if (p_type == "float") {
            $("#" + p_class + " #" + p_key + " input[name='" + p_type + "']").val(p_value);
            //$("#"+p_class+" #"+ p_type+" input[name='"+ p_key +"']" ).val(p_value);
    }
    if (p_type == "Vec2") {
        var vec2 = p_value.split(":");
        $("#" + p_class + " #" + p_key + " input[name='x']").val(vec2[0]);
        $("#" + p_class + " #" + p_key + " input[name='y']").val(vec2[1]);
    }
    if (p_type == "Vec3") {
        var vec3 = p_value.split(":");
        $("#" + p_class + " #" + p_key + " input[name='x']").val(vec3[0]);
        $("#" + p_class + " #" + p_key + " input[name='y']").val(vec3[1]);
        $("#" + p_class + " #" + p_key + " input[name='z']").val(vec3[2]);
    }
    if (p_type == "Vec4") {
        var vec4 = p_value.split(":");
        $("#" + p_class + " #" + p_key + " input[name='x']").val(vec4[0]);
        $("#" + p_class + " #" + p_key + " input[name='y']").val(vec4[1]);
        $("#" + p_class + " #" + p_key + " input[name='z']").val(vec4[2]);
        $("#" + p_class + " #" + p_key + " input[name='w']").val(vec4[3]);
    }
}

$(document).on('change mousemove', 'input', function() {

    var s_KeyObject = $(this).parent(); //div brightness
    var s_ClassObject = s_KeyObject.parent(); //div colorcorrection
    var s_Class = $(s_ClassObject).attr("name");
    var s_Key = $(s_KeyObject).attr("name");
    var s_Type = $(s_KeyObject).attr("type");

    var Return = s_Class + ":" + s_Key + ":" + s_Type + ":";

    if (s_Type == "bool") {
        Return += $(this).is(':checked');
    }
    if (s_Type == "float") {
        Return += $(this).val();
    }
    if(s_Type == "Vec3" || s_Type=="Vec2" || s_Type == "Vec4") {
        $(s_KeyObject).children('input').each( function() {
            Return+=this.name + ":" + this.value + ":";
        });
    }

    console.log(Return);

    SendUpdate(Return);
});