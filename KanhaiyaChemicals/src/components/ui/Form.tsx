import { useState } from 'react';
import { FormField, FormData, submitFormToGoogleSheets } from '../../utils/forms';
import Button from './Button';

interface FormProps {
  fields: FormField[];
  formType: 'product_inquiry' | 'custom_request' | 'contact';
  onSuccess?: () => void;
  submitButtonText?: string;
  className?: string;
}

export default function Form({ 
  fields, 
  formType, 
  onSuccess, 
  submitButtonText = 'Submit',
  className = ''
}: FormProps) {
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitFormToGoogleSheets(formData, formType);
      setFormData({});
      onSuccess?.();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fields.map((field) => (
          <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
            <label htmlFor={field.name} className="label">
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleInputChange}
                required={field.required}
                placeholder={field.placeholder}
                rows={4}
                className="input"
              />
            ) : field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleInputChange}
                required={field.required}
                className="input"
              >
                <option value="">Select {field.label}</option>
                {field.options?.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleInputChange}
                required={field.required}
                placeholder={field.placeholder}
                className="input"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <Button 
          type="submit" 
          variant="primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : submitButtonText}
        </Button>
      </div>
    </form>
  );
}