// Stats function to check hard stats on an account
// Replace the parameter on the stats variable to see stats for multiple ranges

// TODAY, YESTERDAY, LAST_7_DAYS, THIS_WEEK_SUN_TODAY, LAST_WEEK, LAST_14_DAYS, LAST_30_DAYS, LAST_BUSINESS_WEEK, LAST_WEEK_SUN_SAT, THIS_MONTH, LAST_MONTH, ALL_TIME


function main() {
    var currentAccount = AdWordsApp.currentAccount();
    var data = currentAccount.getCustomerId() + " " + currentAccount.getName() + " " + currentAccount.getTimeZone();
    // =================================== CHANGE THIS FIELD WITH A TIMELINE FROM ABOVE =========================================
    // ==========================================================================================================================
                                        var stats = currentAccount.getStatsFor('LAST_MONTH');
    // ==========================================================================================================================
    // ==========================================================================================================================
    var specificStats = "Stats for last Month - " 
    + "Clicks: " + stats.getClicks() + ", " 
    + "AverageCpm: " + stats.getAverageCpm() + ", " 
    + "Cost: " + stats.getCost() + ", " 
    + "Impressions: " + stats.getImpressions() + ", "
    + "CTR: " + stats.getCtr() + ", "
    + "CostPerClick: " + stats.getAverageCpc() + ", " 
    + '\n' +
    + "Conversion Rate: " + stats.getConversionRate() + ", "
    + "Conversions: " + stats.getConversions() + ", "
    + "Average Page Views: " + stats.getAveragePageviews() + ", "
    + "Average Position: " + stats.getAveragePosition();
    Logger.log("report executed: " + data + '\n' + specificStats);
  
  }
  
  