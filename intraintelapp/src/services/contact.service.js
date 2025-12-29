export const submitContactForm = async (formData) => {
    try {
        const apiUrl = 'https://backend-486603145666.us-central1.run.app';
        const response = await fetch(`${apiUrl}/contact/contactUS`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.error || 'Failed to submit form');
        }

        return await response.json();
    } catch (error) {
        if (error.message === 'Failed to fetch') {
            throw new Error('Network error. Please check your connection.');
        }
        throw error;
    }
};
