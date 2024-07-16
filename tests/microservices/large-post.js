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
    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const car = JSON.stringify({
        name: "car"
    });
    const response = http.post('http://localhost/cars', car, params);
    const consumption = JSON.stringify({
        DateTime: "2022-06-01T19:22:00+02:00",
        Distance: 1,
        Amount: 1,
        carId: response.json().id
    });
    http.post('http://localhost/consumptions', consumption, params);
};
