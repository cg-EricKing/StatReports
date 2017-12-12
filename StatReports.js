// Stats function to check hard stats on an account
// Replace the parameter on the stats variable to see stats for multiple ranges

// TODAY, YESTERDAY, LAST_7_DAYS, THIS_WEEK_SUN_TODAY, LAST_WEEK, LAST_14_DAYS, LAST_30_DAYS, LAST_BUSINESS_WEEK, LAST_WEEK_SUN_SAT, THIS_MONTH, LAST_MONTH, ALL_TIME
// Add to this script - 
    // Tie in a spreadsheet (multiple sheets for multiple stats ranges if requested)
        // Possibility of a select menu in spreadsheet to fire script and show data
        // If not a select menu, show the ranges to choose from and have it be enetered => then a function will grab that and enter it in the getStatsFor() method.
function main() {
    // spreadsheet init
    var spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/10AHev_LCNeQhcMvZdDlxo4ASX8jso79sJ8ylJq1Skj0/edit?usp=sharing';
    var headers = {
        accountName: 2,
        clicks: 3,
        impressions: 4,
        ctr: 5,
        cost: 6,
        avgCpm: 7,
        cpc: 8,
        avgPv: 9,
        conversions: 10,
        conversionRate: 11
    };
    var row = 2;

    Logger.log('Using spreadsheet - %s.' + spreadsheetUrl);
    var spreadsheet = SpreadsheetApp.openByUrl(spreadsheetUrl);
    var sheet = spreadsheet.getSheets()[0];

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
  
  