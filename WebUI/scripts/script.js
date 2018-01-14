var m_Classes = {};
var m_Enums = {};
var m_VectorNames = ["x", "y", "z", "w"];


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

function AddField(p_Class, p_Field, p_Type, p_Value) {

    if(m_Classes[p_Class] == null) {
        CreateClass(p_Class);
    }

    if(m_Classes[p_Class][p_Field] == null) {
        CreateField(p_Class, p_Field, p_Type);
        CreateValue(p_Class, p_Field, p_Type, p_Value)
    } else {
        UpdateValue(p_Class, p_Field, p_Type, p_Value)
    }
}

function UpdateValue(p_Class, p_Field, p_Type, p_Value) {
    console.log(p_Class + " | " + p_Field + " | " + p_Value)
    if (p_Type == "Boolean") {
        if (p_Value == "true") {
            $("#" + p_Class + " #" + p_Field + " input[name='" + p_Type + "']").attr("checked", "checked");
            //$("#"+p_Class+" #"+ p_Type+" input[name='"+ p_Field +"']" ).val(p_Value);
        } else {
            $("#" + p_Class + " #" + p_Field + " input[name='" + p_Type + "']").removeAttr("checked");
        }
    }
    if (p_Type == "Float32") {
            $("#" + p_Class + " #" + p_Field + " input[name='" + p_Type + "']").val(parseFloat(p_Value));
            //$("#"+p_Class+" #"+ p_Type+" input[name='"+ p_Field +"']" ).val(p_Value);
    }
    if (p_Type == "Vec2") {
        var vec2 = ParseVec(p_Value)
        $("#" + p_Class + " #" + p_Field + " input[name='x']").val(vec2[0]);
        $("#" + p_Class + " #" + p_Field + " input[name='y']").val(vec2[1]);
    }
    if (p_Type == "Vec3") {
        var vec3 = ParseVec(p_Value)
        $("#" + p_Class + " #" + p_Field + " input[name='x']").val(vec3[0]);
        $("#" + p_Class + " #" + p_Field + " input[name='y']").val(vec3[1]);
        $("#" + p_Class + " #" + p_Field + " input[name='z']").val(vec3[2]);
    }
    if (p_Type == "Vec4") {
        var vec4 = ParseVec(p_Value)
        $("#" + p_Class + " #" + p_Field + " input[name='x']").val(vec4[0]);
        $("#" + p_Class + " #" + p_Field + " input[name='y']").val(vec4[1]);
        $("#" + p_Class + " #" + p_Field + " input[name='z']").val(vec4[2]);
        $("#" + p_Class + " #" + p_Field + " input[name='w']").val(vec4[3]);
    }
}

function CreateClass(p_Class) {
    m_Classes[p_Class] = {};
    var node = document.createElement("li");                 // Create a <li> node
    var link = document.createElement("a");
    link.href = "#" + p_Class;
    link.innerHTML=p_Class;
    node.appendChild(link);
    document.getElementById("tabs").appendChild(node);
    var content = document.createElement("div");
    content.id = p_Class;
    $(content).attr("name", p_Class);
    document.getElementById("content").appendChild(content);
    $("#window").tabs("refresh");
}


function CreateField(p_Class, p_Field, p_Type) {
    m_Classes[p_Class][p_Field] = null;

    var nodeTitle = document.createElement("h2");
    nodeTitle.innerHTML = p_Field;
    
    document.getElementById(p_Class).appendChild(nodeTitle);
}

function CreateValue(p_Class, p_Field, p_Type, p_Value) {
    m_Classes[p_Class][p_Field]= p_Value;
    var s_ContentNode = document.createElement("div");

    switch (p_Type) {
        case "Vec2" :
        case "Vec3" :
        case "Vec4" :
            s_ContentNode = CreateVec(p_Value);
            break;
        case "Boolean" :
            console.log("OY! " + p_Class )
            s_ContentNode = CreateBool(p_Field, p_Value);
            break;
        case "Float32":
            console.log("fuck you, let this work " + " | " + p_Class + " | " + p_Field + " | " + p_Type + " | " + p_Value)
            s_ContentNode = CreateFloat(p_Field, p_Value);
            break;
        case "TextureAsset":
        case "SurfaceShaderBaseAsset":
            s_ContentNode = NotImplemented();
            break;    
        default:
            s_ContentNode = CreateEnum(p_Field, p_Type, p_Value);
            break;
    }
    if(s_ContentNode == null) {
        return;
    }

  

    s_ContentNode.setAttribute("name", p_Field);
    s_ContentNode.setAttribute("type", p_Type);
    s_ContentNode.id = p_Field;
    document.getElementById(p_Class).appendChild(s_ContentNode);

      if(p_Field == "SunRotationY") {
        $("#OutdoorLight #SunRotationX input").attr("max", 360);
        $("#OutdoorLight #SunRotationY input").attr("max", 360);
    }
}

function CreateVec(p_Value) {
    var s_Vec = {};
    var s_Value = ParseVec(p_Value);
    var s_ContentNode = document.createElement("div");
   
    for(var i = 0; i < s_Value.length; i++) {
        s_Vec[i] = document.createElement("input");
        s_Vec[i].setAttribute("type", "range");
        s_Vec[i].setAttribute("min", GetSliderMin(s_Value[i]));
        s_Vec[i].setAttribute("max", GetSliderMax(s_Value[i]));
        s_Vec[i].setAttribute("step", 0.0001);
        s_Vec[i].setAttribute("name", m_VectorNames[i]);
        s_Vec[i].setAttribute("value", s_Value[i]);
        s_ContentNode.appendChild(s_Vec[i]);
    }
   
    return s_ContentNode;
}

function CreateBool(p_Field, p_Value) {
    console.log("YO!" + p_Field + " | " + p_Value);
    var s_ContentNode = document.createElement("div");

    var s_Bool = document.createElement("input");
    s_Bool.setAttribute("type", "checkbox");
    s_Bool.setAttribute("name", p_Field);
    if(p_Value == "true") {
        s_Bool.setAttribute("checked", "");
    }
    s_ContentNode.appendChild(s_Bool);
    return s_ContentNode;
}

function CreateFloat(p_Field, p_Value) {
    var s_ContentNode = document.createElement("div");
    console.log(p_Value);
    console.log(parseFloat(p_Value));
    var s_Float = document.createElement("input");
    s_Float.setAttribute("type", "range");
    s_Float.setAttribute("min", GetSliderMin(parseFloat(p_Value)));
    s_Float.setAttribute("max", GetSliderMax(parseFloat(p_Value)));
    s_Float.setAttribute("step", 0.0001);
    s_Float.setAttribute("name", p_Field);
    s_Float.setAttribute("value", parseFloat(p_Value)); 
    s_ContentNode.appendChild(s_Float);
    return s_ContentNode;
}

function CreateEnum(p_Field, p_Type, p_Value) {
    if(p_Value == "Realm") {
        return null;
    }
    var s_ContentNode = document.createElement("div");

    var s_Enum = document.createElement("select");
    s_Enum.setAttribute("name", p_Field);
    console.log(p_Type);
    console.log(m_Enums)
    for(var i = 0; i < m_Enums[p_Type].length; i++) {
        var s_Option = document.createElement("option");
        s_Option.setAttribute("value", m_Enums[p_Type][i]);
        s_Option.text = m_Enums[p_Type][i];
        if(i == p_Value) {
            s_Option.setAttribute("selected", "selected");
        }
        s_Enum.add(s_Option);
    }

    s_ContentNode.appendChild(s_Enum);
    return s_ContentNode;
}
function NotImplemented() {
    var s_ContentNode = document.createElement("div");

    var s_Float = document.createElement("label");
    s_Float.text = "NotImplemented";
    s_ContentNode.appendChild(s_Float);
    return s_ContentNode;
}

function GetSliderMax(p_Range) {
    var s_Range = 1;
    if(p_Range > 1) {
        s_Range = 10;
    }
    if(p_Range > 10) {
        s_Range = 100;
    }
    if(p_Range > 100) {
        s_Range = 1000;
    }
    if(p_Range > 1000) {
        s_Range = 10000;
    }
    if(p_Range > 10000) {
        s_Range = 100000;
    }
    return s_Range
}

function GetSliderMin(p_Range) {
    var s_Range = 0;
    if(p_Range < 0 && p_Range > -1) {
        s_Range = -1;
    }
    if(p_Range < -1) {
        s_Range = -10;
    }
    if(p_Range < -10) {
        s_Range = -100;
    }
    if(p_Range < -100) {
        s_Range = -1000;
    }
    if(p_Range < -1000) {
        s_Range = -10000;
    }
    if(p_Range < -10000) {
        s_Range = -100000;
    }
    return s_Range
}


function ParseVec(p_Vec) {

    var s_Vec = p_Vec.replace(/\(|\)| /g,'');
    s_Vec = s_Vec.split(",");

    var s_Ret = [];
    for(var i = 0; i < s_Vec.length; i++) {
        s_Ret[i] = s_Vec[i]
    }
    return s_Ret;
}

function ParseBoolean(p_Value) {
    switch (p_Value) {
        case "true":
            return true;
            break;
        default:
            return false;
            break;
    }
}

function ParseEnum(p_Type, p_Value) {
    if(m_Enums[p_Type] != null) {
        return m_Enums[p_Type][parseInt(p_Value)];
    }
}

function AddEnum(p_Type, p_Value) {
    console.log(p_Value)
    var s_Enums = p_Value.split(":")
    s_Enums.splice(s_Enums.length - 1, 1);
    m_Enums[p_Type] = s_Enums;
}

$(document).on('change mousemove', 'input', function() {

    var s_KeyObject = $(this).parent(); //div brightness
    var s_ClassObject = s_KeyObject.parent(); //div colorcorrection
    var s_Class = $(s_ClassObject).attr("name");
    var s_Key = $(s_KeyObject).attr("name");
    var s_Type = $(s_KeyObject).attr("type");

    var Return = s_Class + ":" + s_Key + ":" + s_Type + ":";

    if (s_Type == "Boolean") {
        Return += $(this).is(':checked');
    }
    if (s_Type == "Float32") {
        Return += $(this).val();
    }
    if(s_Type == "Vec3" || s_Type=="Vec2" || s_Type == "Vec4") {
        $(s_KeyObject).children('input').each( function() {
            Return+=this.name + ":" + this.value + ":";
        });
    }

    SendUpdate(Return);
});