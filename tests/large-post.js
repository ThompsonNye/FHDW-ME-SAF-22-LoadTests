import http from 'k6/http';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    discardResponseBodies: true,
    scenarios: {
        constantRate: {
            executor: 'per-vu-iterations',
            vus: 30,
            iterations: 10000,
            maxDuration: '1h',
        }
    }
};

export default () => {
    const carsUrl = 'http://localhost:8090/api/cars';
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const car = JSON.stringify({
        name: "name"
    });
    http.post(carsUrl, car, params);
};