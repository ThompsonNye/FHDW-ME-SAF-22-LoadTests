import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    discardResponseBodies: true,
    vus: 2,
    duration: '60s',
};

export default () => {
    http.batch([
        ['GET', 'http://localhost/consumptions/' ],
        ['GET', 'http://localhost/cars/' ]
    ]);
    sleep(1);
};
