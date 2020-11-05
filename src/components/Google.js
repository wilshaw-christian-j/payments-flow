const SPREADSHEET_ID = '1HwOLM0gO6CGa9NXcokUXYimgh0xHfEkODSIA-bGtYDQ';
const CLIENT_ID = '272317881517-htdk5sakjvhi81rfr2ohd60cso41m12q.apps.googleusercontent.com'; //from https://console.developers.google.com/apis/credentials
const API_KEY = 'AIzaSyAabwz55TZqe2XVVzp37sVFVutvqt0Mgg4'; //https://console.developers.google.com/apis/credentials
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';


const initClient=() => {
    window.gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(()=> {
        window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus); //add a function called `updateSignInStatus` if you want to do something once a user is logged in with Google
        this.updateSignInStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
      });
}
export default function Google()
{
    window.gapi.load('client:auth2', initClient);
}
export const sendDataToGoogle=(submissionValues)=>{
    const params = {
        // The ID of the spreadsheet to update.
        spreadsheetId: SPREADSHEET_ID, 
        // The A1 notation of a range to search for a logical table of data.Values will be appended after the last row of the table.
        range: 'Sheet1', //this is the default spreadsheet name, so unless you've changed it, or are submitting to multiple sheets, you can leave this
        // How the input data should be interpreted.
        valueInputOption: 'RAW', //RAW = if no conversion or formatting of submitted data is needed. Otherwise USER_ENTERED
        // How the input data should be inserted.
        insertDataOption: 'INSERT_ROWS', //Choose OVERWRITE OR INSERT_ROWS
      };
  
      const valueRangeBody = {
        'majorDimension': 'ROWS', //log each entry as a new row (vs column)
        'values': [submissionValues] //convert the object's values to an array
      };
  
      let request = window.gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
      request.then(function (response) {
        // TODO: Insert desired response behaviour on submission
        console.log(response.result);
      }, function (reason) {
        console.error('error: ' + reason.result.error.message);
      });
}