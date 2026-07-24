public with sharing class FSAM_SecurityUtil {

    // Object-level CRUD checks

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

    // Field-level security (FLS) checks

    public static Boolean canReadField(Schema.SObjectField field) {
        return field.getDescribe().isAccessible();
    }

    public static Boolean canCreateField(Schema.SObjectField field) {
        return field.getDescribe().isCreateable();
    }

    public static Boolean canUpdateField(Schema.SObjectField field) {
        return field.getDescribe().isUpdateable();
    }

    // Strip inaccessible fields before DML

    public static List<SObject> stripInaccessibleForCreate(List<SObject> records) {
        return Security.stripInaccessible(
            AccessType.CREATABLE,
            records
        ).getRecords();
    }

    public static List<SObject> stripInaccessibleForUpdate(List<SObject> records) {
        return Security.stripInaccessible(
            AccessType.UPDATABLE,
            records
        ).getRecords();
    }

}