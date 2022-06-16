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
    http.batch([
        ['GET', 'http://localhost/consumptions' ],
        ['GET', 'http://localhost/cars' ]
    ]);
};
