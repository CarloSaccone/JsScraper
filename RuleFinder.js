
var handleClick = (e) => {
    console.log(e.target)
    // jQuery("#yeldo-toolkit-value").text(jQuery(e.target).text());

    const result = elemToSelector(e.target,true)
    console.log(result)
    const [querySelector,fieldName] = result
    var elements = jQuery(querySelector)

    console.log("fieldName, querySelector:",fieldName,querySelector,elements[0])
    elements.css( "background","#8334CD66" );
    console.log(jQuery(elements[0]).text())

    jQuery("#yeldo-toolkit-field").val(fieldName);
    jQuery("#yeldo-toolkit-value").val(querySelector);


}

function addRule(){
    var r = {
        field:jQuery("#yeldo-toolkit-field").val(),
        value:jQuery("#yeldo-toolkit-value").val(),
        replace:jQuery("#yeldo-toolkit-replace").val(),
    }
    window.ruleSet = window.ruleSet||{}
    window.ruleSet[r.field] = r
    console.log(window.ruleSet)
}

function testRule(){
    jQuery(jQuery("#yeldo-toolkit-value").val()).css( "background","#f2ec3c66" );
}

function injectJquery(e, s){
    e.src = s;
    e.onload = function() {
        jQuery.noConflict();
        console.log('jQuery injected');
        main();
    };
    document.head.appendChild(e);
}

function createToolkit(){

    var buttonSave = jQuery('<button onClick="javascript:addRule()">add</button>');
    var buttonStore = jQuery('<button onClick="javascript:testRule()">test</button>');
    buttonSave.css("color","#fff")
    buttonSave.css("border","1px solid #fff")
    buttonSave.css( "padding","0 10px" );
    buttonSave.css( "margin","0 10px" );

    buttonStore.css("color","#fff")
    buttonStore.css("border","1px solid #fff")
    buttonStore.css( "padding","0 10px" );
    buttonStore.css( "margin","0 10px" );

    var container = jQuery('<div></div>');
    container.append(buttonSave);
    container.append(buttonStore);

    var input = jQuery(`<label>field:</label><input type="text" id="yeldo-toolkit-field">
    &nbsp;<label>expr:</label><input type="text" id="yeldo-toolkit-value">
    &nbsp;<label>replace:</label><input type="text" id="yeldo-toolkit-replace">`);
    container.css( "background","#8334CD" );
    // input.css( "border","2px solid #8334CD" );
    container.css( "position","fixed" );
    container.css( "bottom","0" );
    container.css( "padding","10px" );
    container.css( "width","100%" );
    container.css( "color","#fff" );
    input.css( "color","#000" );
    container.prepend(input);
    jQuery("body").append(container);
}

function elemToSelector(elem) {
    console.log("elemToSelector",elem)
    const {
      tagName,
      className,
      parentNode,
    } = elem;
  
    if (tagName === 'HTML') return ['HTML',null];
  
    let str = tagName;
  
    if (className&&!isObject(className)) {
      const classes = className.split(/\s/);
      for (let i = 0; i < classes.length; i++) {
        str += `.${classes[i]}`;
      }
    }

    var ariaLabel = jQuery(elem).attr("aria-label")
    if(ariaLabel)
    {
        str += `[aria-label=${ariaLabel}]`;
        console.log(str,ariaLabel)
        // return [str,ariaLabel];
    }
    var dataAttributes = Array.from(jQuery(elem)[0].attributes)
                                .filter(f=>f.name.indexOf("data-")>=0)

    if(dataAttributes && dataAttributes.length)
    {
        // str += `[aria-label=${ariaLabel}]`;
        dataAttributes.map(i=>{
            str += `[${i.name}=${i.value}]`;
        })
        // return [str,ariaLabel];
    }

    if(parentNode)
    {
        var rec = elemToSelector(parentNode)
        return [`${rec[0]} > ${str}`, rec[1]];
    }
    return [str, null];

  }

  function isObject (item)  {
    if (
      (typeof item === 'object' || typeof item === 'function') &&
      item !== null
    ) {
      return true;
    }
    return false;
  };


function main(){
    createToolkit();
    
    document.body.firstChild.onclick = handleClick;
}

injectJquery(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js')
