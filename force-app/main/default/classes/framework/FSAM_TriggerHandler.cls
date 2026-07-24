public virtual class FSAM_TriggerHandler {
    public virtual void beforeInsert(){}

    public virtual void beforeUpdate(){}

    public virtual void beforeDelete(){}

    public virtual void afterInsert(){}

    public virtual void afterUpdate(){}

    public virtual void afterDelete(){}

    public virtual void afterUndelete(){}

    public void run(){
        if(Trigger.isBefore){
            if(Trigger.isInsert){
                beforeInsert();
            }

            if(Trigger.isUpdate){
                beforeUpdate();
            }

            if(Trigger.isDelete){
                beforeDelete();
            }
        }

        if(Trigger.isAfter){
            if(Trigger.isInsert){
                afterInsert();
            }

            if(Trigger.isUpdate){
                afterUpdate();
            }

            if(Trigger.isDelete){
                afterDelete();
            }

            if(Trigger.isUndelete){
                afterUndelete();
            }
        }
    }
}