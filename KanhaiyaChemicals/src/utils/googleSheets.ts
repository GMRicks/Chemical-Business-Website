const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_SHEETS_WEBHOOK_URL';

interface FormData {
  [key: string]: string | number;
}

export async function submitToGoogleSheets(formData: FormData, sheetName: string) {
  try {
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
        sheet: sheetName
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    throw error;
  }
}