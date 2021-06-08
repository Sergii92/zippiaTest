import express from 'express';

const app = express();
const port = 3000;

app.get('/test/jobs', (req, res) => {
	const clientBundleScript = `<script src="http://localhost:8080/scripts/bundle.js"></script>`;
	const clientBundleStyle = `<link rel="stylesheet" href="http://localhost:8080/styles/bundle.css">`;

	res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>My App</title>
                ${clientBundleStyle} 
            </head>
            <body>
                <div id='app'></div> 
                ${clientBundleScript}
            </body>
        </html>
    `);
});

app.listen(port, () => {
	console.log(`App listening on http://localhost:${port}`);
});
