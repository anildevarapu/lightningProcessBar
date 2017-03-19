({
	myAction : function(component, event, helper) {
		
	},
    respondToEvent: function(component, event, helper) {
        var sectionName = event.getParam("secctionName");
        // $A.util.t(component.find("myDiv"), "slds-hide");
        if(sectionName=='section4'){
            $A.util.removeClass(component.find("mySection4"), "slds-hide");
        }
        else {
            $A.util.addClass(component.find("mySection4"), "slds-hide");
        }
        
    },
})