import runCors from '../../lib/cors';

export async function applyCors(req, res) {
    await runCors(req, res);
}