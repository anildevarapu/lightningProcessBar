({
	myAction : function(component, event, helper) {
		
	},
    respondToEvent: function(component, event, helper) {
        var sectionName = event.getParam("secctionName");
        // $A.util.t(component.find("myDiv"), "slds-hide");
        if(sectionName=='section1'){
            $A.util.removeClass(component.find("myFirstSection"), "slds-hide");
        }
        else {
            $A.util.addClass(component.find("myFirstSection"), "slds-hide");
        }
        
    },
})