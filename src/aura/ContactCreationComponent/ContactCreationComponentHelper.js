({
	saveRecord : function(cmp) {
		var newCon = cmp.get("v.con");
        var action = cmp.get("c.saveContact");
        action.setParams({ 
            "con": newCon
        });
        action.setCallback(this, function(a) {
            var state = a.getState();
            if (state === "SUCCESS") {
                var name = a.getReturnValue();
                console.log(a.getReturnValue());   
                cmp.set("v.saveState", "SAVED");
            	//this.getContacts(cmp);
            }
        });
        $A.enqueueAction(action);

	},
    getContacts : function(cmp) {
        var action = cmp.get("c.getContacts");
        action.setCallback(this, function(response) {
            var state = response.getState();
            console.log('Enter Here');
            //if (cmp.isValid() && state === "SUCCESS") {
                cmp.set("v.contactList", response.getReturnValue());
            console.log('Enter Here1'+response.getReturnValue());
            //}

        });
         $A.enqueueAction(action);
    }
})