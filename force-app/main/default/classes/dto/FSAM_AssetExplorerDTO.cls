public with sharing class FSAM_AssetExplorerDTO {

    @AuraEnabled
    public FSAM_AssetSummaryDTO summary { get; set; }

    @AuraEnabled
    public List<FSAM_AssetDTO> assets { get; set; }

    @AuraEnabled
    public FSAM_AssetDTO selectedAsset { get; set; }

    @AuraEnabled
    public Datetime generatedOn { get; set; }

    @AuraEnabled
    public String version { get; set; }

}