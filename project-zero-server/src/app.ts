import express from "express";
import { graphqlHTTP } from "express-graphql";
import graphqlConfig from "./graphql";
import os from "os";
import cluster from "cluster";
import "colors";

const app = express();

const port = process.env.PORT || 8080;
const cpuNum = os.cpus().length;

app.use(
	"/graphql",
	graphqlHTTP({
		...graphqlConfig,
		graphiql: true,
	})
);

if (cluster.isMaster) {
	for (let i = 0; i < cpuNum; i++) {
		cluster.fork();
	}
	cluster.on("exit", (worker, code, signal) => {
		console.log(`Worker ${worker.process.pid} died`);
		cluster.fork();
	});
} else {
	app.listen(port, () => console.log(`Running GraphQL API server in port: ${port} - pid: ${process.pid}`.green));
}
