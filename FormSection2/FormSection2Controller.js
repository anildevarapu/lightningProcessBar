({
	showHideDiv : function(component, event, helper) {
		// $A.util.t(component.find("myDiv"), "slds-hide");
		$A.util.toggleClass(component.find("myDiv"), "slds-hide");
	},
    
    respondToEvent: function(component, event, helper) {
        var sectionName = event.getParam("secctionName");
		// $A.util.t(component.find("myDiv"), "slds-hide");
        if(sectionName=='section2'){
            $A.util.removeClass(component.find("myDiv"), "slds-hide");
        }
        else {
             $A.util.addClass(component.find("myDiv"), "slds-hide");
        }
		
	},
})