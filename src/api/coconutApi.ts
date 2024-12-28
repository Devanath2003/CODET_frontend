import { API_URL } from '../config/constants';
import { DetectionResponse } from '../types/api';
import { validateImage } from '../utils/imageHelpers';

export async function detectCoconutMaturity(image: File): Promise<string> {
  try {
    // Validate the uploaded image
    validateImage(image);

    const formData = new FormData();
    formData.append('image', image);

    // Make API call to the Python backend
    const response = await fetch(`${API_URL}/detect`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      // Extract error details from the response if available
      const errorData = await response.json().catch(() => null);
      throw new Error(errorData?.error || 'Detection failed');
    }

    const data: DetectionResponse = await response.json();

    // Ensure the required fields exist in the response
    if (!data.prediction || data.confidence === undefined) {
      throw new Error('Invalid response from server');
    }

    // Format and return the result
    return `${data.prediction} (confidence: ${data.confidence.toFixed(2)}%)`;
  } catch (error) {
    if (error instanceof Error) {
      // Log the error for debugging
      console.error('Detection Error:', error.message);
      throw new Error(`Error: ${error.message}`);
    }
    throw new Error('An unexpected error occurred');
  }
}
