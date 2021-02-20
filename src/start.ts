import { ApiServer } from './server';

export async function start(): Promise<void> {
    const apiServer = new ApiServer();
    await apiServer.start();
    const graceful = async () => {
        process.exit(0);
    };

    // Stop graceful
    process.on('SIGTERM', graceful);
    process.on('SIGINT', graceful);
}