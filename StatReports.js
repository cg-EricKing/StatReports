// Stats function to check hard stats on an account
// Replace the parameter on the stats variable to see stats for multiple ranges

// TODAY, YESTERDAY, LAST_7_DAYS, THIS_WEEK_SUN_TODAY, LAST_WEEK, LAST_14_DAYS, LAST_30_DAYS, LAST_BUSINESS_WEEK, LAST_WEEK_SUN_SAT, THIS_MONTH, LAST_MONTH, ALL_TIME
// Add to this script - 
    // Stats function to clean up the code - less variables and repetition
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
    var currentAccountName = currentAccount.getName();
    var accountNameRange = sheet.getRange(row, headers.accountName);
    var accountNameArray = [[currentAccountName]];
    accountNameRange.setValues(accountNameArray);

    var data = currentAccount.getCustomerId() + " " + currentAccount.getName() + " " + currentAccount.getTimeZone();
    // =================================== CHANGE THIS FIELD WITH A TIMELINE FROM ABOVE =========================================
    // ==========================================================================================================================
                                        var stats = currentAccount.getStatsFor('LAST_MONTH');
    // ==========================================================================================================================
    // ==========================================================================================================================
    
    // function to take in date range and return a 2d array of data
    function getStats(range) {

        var statsRange = currentAccount.getStatsFor(range);
        var clicks = statsRange.getClick();
        var impressions = statsRange.getImpressions();
        var ctr = statsRange.getCtr();
        var cost = statsRange.getCost();
        var avgCpm = statsRange.getAverageCpm();
        var cpc = statsRange.getAverageCpc();
        var conversions = statsRange.getConversions();
        var conversionRate = statsRange.getConversionRate();

        var statsValues = [[clicks,impressions,ctr,cost,avgCpm,cpc,conversions,conversionRate]];

        return statsValues;

    }

    var reportRange = sheet.getRange('C2:J2');
    var currentReport = getStats("THIS_MONTH");
    reportRange.setValues(currentReport);

    
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
  
  