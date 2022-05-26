import http from 'k6/http';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    discardResponseBodies: true,
    scenarios: {
        constantRate: {
            executor: 'per-vu-iterations',
            vus: 30,
            iterations: 1000,
            maxDuration: '1h',
        }
    }
};

export default () => {
    const carsUrl = 'http://localhost:8090/api/cars';
    http.get(carsUrl);
};