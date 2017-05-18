public with sharing class contactCreateController{

    @AuraEnabled
    public static Contact saveContact (Contact con) {    
        upsert con;
        return con;
    }
    
    @AuraEnabled
    public static List<Contact> getContacts() {
        List<Contact> contacts = 
                [SELECT Id, Name, MailingStreet, Phone, Email, Level__c FROM Contact];
        return contacts;
    }
}