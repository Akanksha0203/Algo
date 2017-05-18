({
	saveMethod : function(component, event, helper) {
		helper.saveRecord(component);
        helper.getContacts(component);
    },
    doInit : function(component, event, helper) {
        helper.getContacts(component);
    }
})