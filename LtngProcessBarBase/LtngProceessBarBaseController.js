({
	nextAction : function(component, event, helper) {
	var crntSection = component.get("v.currentSection");
    var swapToSection = '';
            if(crntSection=='section1'){
                swapToSection = 'section2';
            }
            else if(crntSection=='section2'){
                swapToSection = 'section3';
            }
            else if(crntSection=='section3'){
                swapToSection = 'section4';
            }
            else if(crntSection=='section4'){
                    swapToSection = 'section1';
            }
        //updating / setting next values
        component.set("v.currentSection", swapToSection);
        
        //executing event 
        var myEvent = $A.get("e.c:nextPrevEventProcessBar");
        myEvent.setParams({"secctionName": swapToSection});
        myEvent.fire();
	},
    prevAction:  function(component, event, helper) {
		
        	var crntSection = component.get("v.currentSection");
    		var swapToSection = '';
            if(crntSection=='section1'){
                swapToSection = 'section4';
            }
            else if(crntSection=='section2'){
                swapToSection = 'section1';
            }
            else if(crntSection=='section3'){
                swapToSection = 'section2';
            }
            else if(crntSection=='section4'){
                    swapToSection = 'section3';
            }
        //updating / setting next values
        component.set("v.currentSection", swapToSection);
        
        //executing event 
        var myEvent = $A.get("e.c:nextPrevEventProcessBar");
        myEvent.setParams({"secctionName": swapToSection});
        myEvent.fire();
 
	},
})