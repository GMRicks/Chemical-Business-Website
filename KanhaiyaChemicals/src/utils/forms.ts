import toast from 'react-hot-toast';

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'select';
  required?: boolean;
  options?: { value: string; label: string }[];
  placeholder?: string;
}

export interface FormData {
  [key: string]: string;
}

// Replace this with your deployed Google Apps Script Web App URL
export const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwAYxoGH1QevIkW3wdpg8-QFE8wbthYiusHr4KDRXHtDDaNDamukK03cI3LxW9vdg/exec';

export async function submitFormToGoogleSheets(
  formData: FormData,
  formType: 'product_inquiry' | 'custom_request' | 'contact'
) {
  try {
    // Use no-cors mode to handle CORS issues
    const response = await fetch(GOOGLE_SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        form_type: formType,
        timestamp: new Date().toISOString(),
      }),
    });

    // Since no-cors mode doesn't give us access to response details,
    // we'll assume success if we get here without throwing
    toast.success('Form submitted successfully!');
    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to submit form. ';
    if (!navigator.onLine) {
      errorMessage += 'Please check your internet connection.';
    } else if (error instanceof TypeError && error.message === 'Failed to fetch') {
      errorMessage += 'Unable to reach the server. Please try again later.';
    } else {
      errorMessage += 'Please try again.';
    }
    
    toast.error(errorMessage);
    throw error;
  }
}

export const productInquiryFields: FormField[] = [
  { name: 'name', label: 'Your Name', type: 'text', required: true },
  { name: 'company', label: 'Company Name', type: 'text' },
  { name: 'email', label: 'Email Address', type: 'email', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
  { name: 'quantity', label: 'Quantity Required', type: 'text', required: true },
  { name: 'message', label: 'Additional Requirements', type: 'textarea' }
];

export const customRequestFields: FormField[] = [
  { name: 'name', label: 'Your Name', type: 'text', required: true },
  { name: 'company', label: 'Company Name', type: 'text' },
  { name: 'email', label: 'Email Address', type: 'email', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
  { name: 'location', label: 'Location', type: 'text', placeholder: 'City, Country' },
  { name: 'chemicalType', label: 'Chemical Name/Type Required', type: 'text', required: true, placeholder: 'E.g., Refined Sulphur Powder, Custom Sulphur Blend, etc.' },
  { name: 'useCase', label: 'Intended Use Case', type: 'text', required: true, placeholder: 'E.g., Pharmaceutical manufacturing, Agricultural fertilizer, etc.' },
  { name: 'specifications', label: 'Desired Specifications', type: 'textarea', placeholder: 'Please provide details on purity requirements, particle size, solubility, or any other specific characteristics.' },
  { name: 'quantity', label: 'Estimated Quantity Needed', type: 'text', required: true, placeholder: 'E.g., 500kg, 2 tons, etc.' },
  { name: 'budget', label: 'Budget Range', type: 'text', placeholder: 'Your approximate budget' },
  { name: 'additionalInfo', label: 'Additional Information', type: 'textarea', placeholder: 'Any other details that would help us understand your requirements better.' }
];

export const contactFields: FormField[] = [
  { name: 'name', label: 'Your Name', type: 'text', required: true },
  { name: 'email', label: 'Email Address', type: 'email', required: true },
  { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
  { name: 'subject', label: 'Subject', type: 'text', required: true },
  { name: 'message', label: 'Message', type: 'textarea', required: true }
];