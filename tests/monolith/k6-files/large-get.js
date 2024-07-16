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
        ['GET', 'http://localhost/api/consumptions/e00613c8-9c30-48ed-82b9-31bdbaea6d1d' ],
        ['GET', 'http://localhost/api/cars/4d246d4d-dfa3-45ef-92c7-e3f731641012' ]
    ]);
};
