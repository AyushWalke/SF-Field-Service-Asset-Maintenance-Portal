public with sharing class FSAM_Logger {

    public static void info(String message) {
        System.debug(LoggingLevel.INFO, message);
    }

    public static void warn(String message) {
        System.debug(LoggingLevel.WARN, message);
    }

    public static void error(String message) {
        System.debug(LoggingLevel.ERROR, message);
    }
}