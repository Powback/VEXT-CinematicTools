var m_CurrentPreset = {};
var m_FullPreset = {"Name": "", "Priority": ""};
var m_OriginalPreset = {};
var m_Enums = {};
var m_VectorNames = ["x", "y", "z", "w"];

var currentFocus = null;


var m_IsIngame = true;
var m_IsCombied = false;

var m_CurrentlyUpdating = false


var debugconsole = document.getElementById("console")

function Debug(string) {
    var node = document.createElement("li"); // Create a <li> node
    var textnode = document.createTextNode(string); // Create a text node
    node.appendChild(textnode);
    debugconsole.appendChild(node);
}

function SendUpdate(p_Class, p_Field, p_Type, p_Value) {
    // Make sure that we don't send updates when we're updating our sliders.
    if(m_CurrentlyUpdating) {
        return
    }
    if(p_Class == null || p_Field == null || p_Type == null || p_Value == null) {
        return
    }
    m_FullPreset[p_Class][p_Field] = p_Value;
    var Return = p_Class + ":" + p_Field + ":" + p_Type + ":" + p_Value;

    if(m_CurrentPreset[p_Class] == null) {
        m_CurrentPreset[p_Class] = {};
    }
    if(m_CurrentPreset[p_Class][p_Field] == null) {
        m_CurrentPreset[p_Class][p_Field] = {};
    }
    m_CurrentPreset[p_Class][p_Field] = p_Value;

    if(m_IsIngame) {
        WebUI.Call('DispatchEventLocal', 'CT:UpdateValue', Return);
    }
}

function SetKeyboard(p_Value) {
    if(m_IsIngame) {
        WebUI.Call('DispatchEventLocal', 'CT:SetKeyboard', p_Value);

    }
}

function AddField(p_Class, p_Field, p_Type, p_Value) {
    if (m_FullPreset[p_Class] == null) {
        CreateClass(p_Class);
    }

    if (m_FullPreset[p_Class][p_Field] == null) {
        CreateField(p_Class, p_Field, p_Type);
        CreateValue(p_Class, p_Field, p_Type, p_Value)
    } else {
        UpdateValue(p_Class, p_Field, p_Type, p_Value)
    }
}
//outdated
function UpdateValue(p_Class, p_Field, p_Type, p_Value) {
    if (p_Type == "Boolean") {
        if (p_Value == "true") {
            $("#" + p_Class + " #" + p_Field + " input[inputtype='" + p_Type + "']").attr("checked", "checked");
            //$("#"+p_Class+" #"+ p_Type+" input[name='"+ p_Field +"']" ).val(p_Value);
        } else {
            $("#" + p_Class + " #" + p_Field + " input[inputtype='" + p_Type + "']").removeAttr("checked");
        }
        return;
    }
    var s_IterationCount = 0;
    var s_Value = null;
    switch (p_Type) {
        case "Float32":
            s_IterationCount = 1;
            s_Value = {0: parseFloat(p_Value) };
            break;
        case "Vec2":
            s_IterationCount = 2;
            s_Value = ParseVec(p_Value);
            break;
        case "Vec3":
            s_IterationCount = 3;
            s_Value = ParseVec(p_Value);
            break;
        case "Vec4":
            s_IterationCount = 4;
            s_Value = ParseVec(p_Value);
            break;
        // Enum
        default:
            $("#" + p_Class + " #" + p_Field + " select").val(p_Value);
            $("#" + p_Class + " #" + p_Field + " select").selectmenu("refresh");
        return;
    }


    m_CurrentlyUpdating = true;
    for(var i = 0; i < s_IterationCount; i++) {
        sl = $("#" + p_Class + " #" + p_Field).children().eq(i);
        sl.slider({
            value: parseFloat(parseFloat(s_Value[i])),
            min: GetSliderMin(parseFloat(s_Value[i])),
            max: GetSliderMax(parseFloat(s_Value[i]))
        });
        sl.slider('option','slide')
            .call(sl,null,{ handle: $('.ui-slider-handle', sl), value: s_Value[i] });
    }
    m_CurrentlyUpdating = false;
}

function CreatePreset(p_Preset) {
    p_Preset[p_Preset] = {};

    var nodeTitle = document.createElement("h2");
    nodeTitle.innerHTML = p_Preset;

    document.getElementById("Presets").appendChild(nodeTitle);
}

function CreateClass(p_Class) {
    m_FullPreset[p_Class] = {};
    m_OriginalPreset[p_Class] = {};

    var node = document.createElement("li"); // Create a <li> node
    var link = document.createElement("a");
    link.href = "#" + p_Class;
    link.innerHTML = p_Class;
    node.appendChild(link);
    document.getElementById("tabs").appendChild(node);
    var content = document.createElement("div");
    content.id = p_Class;
    $(content).attr("name", p_Class);
    document.getElementById("content").appendChild(content);
    $("#window").tabs("refresh");
}


function CreateField(p_Class, p_Field, p_Type) {
    m_FullPreset[p_Class][p_Field] = null;
    m_OriginalPreset[p_Class][p_Field] = null;

    var nodeTitle = document.createElement("h2");
    nodeTitle.innerHTML = p_Field;

    document.getElementById(p_Class).appendChild(nodeTitle);
}

function CreateValue(p_Class, p_Field, p_Type, p_Value) {

    m_FullPreset[p_Class][p_Field] = p_Value;
    m_OriginalPreset[p_Class][p_Field] = p_Value;
    var s_ContentNode = document.createElement("div");

    switch (p_Type) {
        case "Vec2":
        case "Vec3":
        case "Vec4":
            s_ContentNode = CreateVec(p_Class, p_Field, p_Type, p_Value);
            break;
        case "Boolean":
            s_ContentNode = CreateBool(p_Field, p_Value);
            break;
        case "Float32":
            s_ContentNode = CreateFloat(p_Class, p_Field, p_Type, p_Value);
            break;
        case "TextureAsset":
        case "SurfaceShaderBaseAsset":
            s_ContentNode = NotImplemented();
            break;
        default:
            s_ContentNode = CreateEnum(p_Field, p_Type, p_Value);

            break;
    }
    if (s_ContentNode == null) {
        return;
    }



    s_ContentNode.setAttribute("name", p_Field);
    s_ContentNode.setAttribute("type", p_Type);
    s_ContentNode.id = p_Field;
    document.getElementById(p_Class).appendChild(s_ContentNode);
    
    $("select").selectmenu(); // hack to make all dropdowns selectmenu. I don't care.

    if (p_Field == "SunRotationY") {
        $("#OutdoorLight #SunRotationX").slider("max", 360);
        $("#OutdoorLight #SunRotationY").slider("max", 360);
    }
}

function CreateVec(p_Class, p_Field, p_Type, p_Value) {
    var s_Vec = {};
    var s_Value = ParseVec(p_Value);
    var s_ContentNode = document.createElement("div");


    for (var i = 0; i < s_Value.length; i++) {
        var ret = CreateFloat(p_Class, p_Field, p_Type, s_Value[i]);
        s_ContentNode.appendChild(ret.children[0]);
    }

    return s_ContentNode;
}

function CreateBool(p_Field, p_Value) {
    var s_ContentNode = document.createElement("div");

    var s_Bool = document.createElement("input");
    s_Bool.setAttribute("type", "checkbox");
    s_Bool.setAttribute("inputType", "Boolean");
    s_Bool.setAttribute("name", p_Field);
    if (p_Value == "true") {
        s_Bool.setAttribute("checked", "");
    }
    s_ContentNode.appendChild(s_Bool);
    return s_ContentNode;
}

function CreateFloat(p_Class, p_Field, p_Type, p_Value) {
    var s_ContentNode = document.createElement("div");

    var s_Slider = document.createElement("div");
    s_Slider.setAttribute("name", p_Type);
    s_Slider.setAttribute("inputType", p_Type);
    s_Slider.setAttribute("displayType", "slider");
    s_Slider.setAttribute("min", GetSliderMin(parseFloat(p_Value)));
    s_Slider.setAttribute("max", GetSliderMax(parseFloat(p_Value)));

    var s_Display = document.createElement("div");
    $(s_Display).attr("class", "valueDisplay");
    s_Slider.appendChild(s_Display);

    $(s_Slider).slider({
        range: "max",
        min: GetSliderMin(parseFloat(p_Value)),
        max: GetSliderMax(parseFloat(p_Value)),
        value: parseFloat(p_Value),
        step: 0.01,
        create: function() {
            $(s_Display).text($(this).slider("value"));
            if($("#" + p_Class + " #" + p_Field).length) {
                ValueUpdated(p_Class, p_Field, p_Type, $("#" + p_Class + " #" + p_Field))
            }
        },
        slide: function(event, ui) {
            $(s_Display).text(ui.value);
            ValueUpdated(p_Class, p_Field, p_Type, $("#" + p_Class + " #" + p_Field));
        },
    });

    s_ContentNode.appendChild(s_Slider);
    return s_ContentNode;
}

function CreateEnum(p_Field, p_Type, p_Value) {
    if (p_Value == "Realm") {
        return null;
    }
    var s_ContentNode = document.createElement("div");

    var s_Enum = document.createElement("select");
    s_Enum.setAttribute("name", p_Field);
    s_Enum.setAttribute("inputType", "Enum");
    for (var i = 0; i < m_Enums[p_Type].length; i++) {
        var s_Option = document.createElement("option");
        s_Option.setAttribute("value", i);
        s_Option.text = m_Enums[p_Type][i];
        if (i == p_Value) {
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
    s_Float.innerHTML = "Not supported";
    s_Float.setAttribute("type", "NotSupported");
    s_ContentNode.appendChild(s_Float);
    return s_ContentNode;
}

function GetSliderMax(p_Range) {
    var s_Range = 1;
    if (p_Range > 1) {
        s_Range = 10;
    }
    if (p_Range > 10) {
        s_Range = 100;
    }
    if (p_Range > 100) {
        s_Range = 1000;
    }
    if (p_Range > 1000) {
        s_Range = 10000;
    }
    if (p_Range > 10000) {
        s_Range = 100000;
    }
    return s_Range
}

function GetSliderMin(p_Range) {
    var s_Range = 0;
    if (p_Range < 0 && p_Range > -1) {
        s_Range = -1;
    }
    if (p_Range < -1) {
        s_Range = -10;
    }
    if (p_Range < -10) {
        s_Range = -100;
    }
    if (p_Range < -100) {
        s_Range = -1000;
    }
    if (p_Range < -1000) {
        s_Range = -10000;
    }
    if (p_Range < -10000) {
        s_Range = -100000;
    }
    return s_Range
}


function ParseVec(p_Vec) {

    var s_Vec = p_Vec.replace(/\(|\)| /g, '');
    s_Vec = s_Vec.split(",");

    var s_Ret = [];
    for (var i = 0; i < s_Vec.length; i++) {
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
    if (m_Enums[p_Type] != null) {
        return m_Enums[p_Type][parseInt(p_Value)];
    }
}

function AddEnum(p_Type, p_Value) {
    var s_Enums = p_Value.split(":")
    s_Enums.splice(s_Enums.length - 1, 1);
    m_Enums[p_Type] = s_Enums;
}



$(document).on('selectmenuchange', 'select', function() {

    var s_KeyObject = $(this).parent(); //div brightness
    var s_ClassObject = s_KeyObject.parent(); //div colorcorrection
    var s_Class = $(s_ClassObject).attr("name");
    var s_Key = $(s_KeyObject).attr("name");
    var s_Type = $(s_KeyObject).attr("type");
    var s_Value = $(this).val();


    SendUpdate(s_Class, s_Key, "Enum", s_Value);

});

$(document).on('focus', 'textarea', function() {
    SetKeyboard("true");
});
$(document).on('focusout', 'textarea', function() {
    SetKeyboard("false");
});

$(document).on('focus', 'input', function() {
    SetKeyboard("true");
});
$(document).on('focusout', 'input', function() {
    SetKeyboard("false");
});

$(document).on('change', '#content input[type=\"checkbox\"]', function() {

    var s_KeyObject = $(this).parent(); //div brightness
    var s_ClassObject = s_KeyObject.parent(); //div colorcorrection
    var s_Class = $(s_ClassObject).attr("name");
    var s_Key = $(s_KeyObject).attr("name");
    var s_Type = $(s_KeyObject).attr("type");
    var s_Value = null;

    var Return = s_Class + ":" + s_Key + ":" + s_Type + ":";
    if (s_Type == "Boolean") {
        s_Value = $(this).is(':checked');

    } else {
        s_Value = $(this).val()

    }

    SendUpdate(s_Class, s_Key, s_Type, s_Value);
});


$(document).on('contextmenu', '.ui-slider-handle', function() {
    var s_KeyObject = $(this).parent().parent(); //div brightness
    var s_ClassObject = s_KeyObject.parent(); //div colorcorrection
    var s_Class = $(s_ClassObject).attr("name");
    var s_Key = $(s_KeyObject).attr("name");
    var s_SubKey = $(this).parent().attr("name");
    var s_Type = $(s_KeyObject).attr("type");

    var s_Parent = $(this).parent();
    var s_Value = s_Parent.slider("value");
    $(s_Parent).attr("value", s_Value);
    $(s_Parent).attr("type", "number");
    s_Parent.slider("destroy");
    s_Parent.changeElementType("input");

    currentFocus = $("#" + s_Class + " #" + s_Key + " input");

    currentFocus.focus();
    currentFocus.select();
    SetKeyboard("true");
});

function SetToSlider(p_Element) {
    var s_Val = $(p_Element).val();
    var s_Class = $(p_Element).parent().parent().attr("name");
    var s_Field = $(p_Element).parent().attr("name");
    var s_Type = $(p_Element).parent().attr("type");
    var s_Min = $(p_Element).attr("min");
    var s_Max = $(p_Element).attr("max");
    var s_Element = $(p_Element).changeElementType("div");
    $(s_Element).slider({
        range: "max",
        min: GetSliderMin(parseFloat(s_Val)),
        max: GetSliderMax(parseFloat(s_Val)),
        value: parseFloat(s_Val),
        step: 0.01,
        create: function() {
            $(this).children(".valueDisplay").text($(this).slider("value"));
            ValueUpdated(s_Class, s_Field, s_Type, $("#" + s_Class + " #" + s_Field));
        },
        slide: function(event, ui) {
            $(this).children(".valueDisplay").text(ui.value);
            ValueUpdated(s_Class, s_Field, s_Type, $("#" + s_Class + " #" + s_Field));
        }
    });
    SetKeyboard("false");
}

function ValueUpdated(p_Class, p_Field, p_Type, p_KeyObject) {
    var s_Value = null;
    if (p_Type == "Boolean") {
        s_Value = $(p_KeyObject).is(':checked');
    }
    if (p_Type == "Float32") {
        s_Value = $(p_KeyObject).children(0).children(".valueDisplay").text();
    }
    if (p_Type == "Vec3" || p_Type == "Vec2" || p_Type == "Vec4") {
        s_Value = "";
        $(p_KeyObject).children('div').each(function() {
            s_Value += $(this).children(".valueDisplay").text() + ":";
        });
    }
    SendUpdate(p_Class, p_Field, p_Type, s_Value);
};

$(document).on('focusout', '#content input[displayType="slider"]', function() {
    SetToSlider(this);
});

$(document).on('keyup', '#content input[displayType="slider"]', function(e) {
    if (e.keyCode == 13) {
        $(this).blur();
        SetToSlider(this);
    }
});


$(document).on('change', '#presetHolder input', function() {
    UpdateCurrentPreset()
});

function UpdateCurrentPreset(p_PresetType) {
    if (p_PresetType != null) {
        m_IsCombied = p_PresetType
    }

    var s_CurrentState = "";

    m_CurrentPreset['Name'] = $('#PresetName').val();
    m_CurrentPreset['Priority'] = $('#PresetPriority').val();

    m_FullPreset['Name'] = m_CurrentPreset['Name']
    m_FullPreset['Priority'] = m_CurrentPreset['Priority'];

    var prefix =    'class "' + m_CurrentPreset['Name'] +'"\n' +
                    'local table = [[\n';

    var suffix = '\n]]\n\n\n' +
        'function '+ m_CurrentPreset['Name'] +  ':GetPreset()\n' +
        '  return table\n' +
        'end\n' +
        '\n' +
        'return ' + m_CurrentPreset['Name'];

    $("#CurrentState").text(prefix);

    if(m_IsCombied) {
        $("#CurrentState").text($("#CurrentState").text() + JSON.stringify(m_FullPreset, null, 4));
    } else {
        $("#CurrentState").text($("#CurrentState").text() + JSON.stringify(m_CurrentPreset, null, 4));
    }

    $("#CurrentState").text($("#CurrentState").text() + suffix);
}


(function($) {
    $.fn.changeElementType = function(newType) {
        var newElements = [];

        $(this).each(function() {
            var attrs = {};

            $.each(this.attributes, function(idx, attr) {
                attrs[attr.nodeName] = attr.nodeValue;
            });

            var newElement = $("<" + newType + "/>", attrs).append($(this).contents());

            $(this).replaceWith(newElement);

            newElements.push(newElement);
        });

        return $(newElements);
    };
})(jQuery);


$(document).ready(function () {
    if (window.location.href.indexOf("webui") == -1) {
        m_IsIngame = false;
    }
});