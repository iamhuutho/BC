interface UserData {
    email: string;
    password: string;
}

const data: UserData = {
    email: "admin@web.com",
    password: "admin",
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const signIn = async (email: string, password: string): Promise<{ success: boolean }> => {
    const response = await fetch('http://localhost:3001/login', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        throw new Error('Invalid credentials');
    }
};
export const registerUser = async (email: string, password: string): Promise<{ success: boolean }> => {
    const response = await fetch('http://localhost:3001/register', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
        throw new Error('Failed to register user');
    }

    return await response.json();
};