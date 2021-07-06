import { AzureFunction, Context, HttpRequest } from "@azure/functions"
declare const Buffer

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    context.log('HTTP trigger function processed a request.');

    const header = req.headers['x-ms-client-principal'];
    const encoded = Buffer.from(header, 'base64');
    const decoded = encoded.toString('ascii');

    context.res = {
        body: {
            clientPrincipalx: JSON.parse(decoded),
        },
    };



};

export default httpTrigger;