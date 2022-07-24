import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
});

axiosClient.interceptors.request.use((config) => {
    return {
        ...config,
        headers: {
            Authorization: `Beaerer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDY4MGFjZTIzMjAyMTEzYmFiNzlmYSIsImlhdCI6MTY1ODY0ODM5OSwiZXhwIjoxNjU4NzM0Nzk5fQ.RnuI7uzgXOKfIjVPPUmePSaQ-Sa_JWfAklRAyh5472Q`,
            'Content-Type': 'application/json',
        },
    };
});

export default axiosClient;
