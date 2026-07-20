public with sharing class FSAM_SecurityUtil {

    public static Boolean canRead(Schema.SObjectType objectType) {
        return objectType.getDescribe().isAccessible();
    }

    public static Boolean canCreate(Schema.SObjectType objectType) {
        return objectType.getDescribe().isCreateable();
    }

    public static Boolean canUpdate(Schema.SObjectType objectType) {
        return objectType.getDescribe().isUpdateable();
    }

    public static Boolean canDelete(Schema.SObjectType objectType) {
        return objectType.getDescribe().isDeletable();
    }
}