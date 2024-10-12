import { convertNetscapeToJson, convertJsonToNetscape } from './services.js';

function bootstrap() {
    const jsonCookies = convertNetscapeToJson('.example.com	TRUE	/	TRUE	undefined	user_session	abc123xyz');

    const netscapeCookies = convertJsonToNetscape(
        JSON.stringify([
            {
                name: 'user_session',
                value: 'abc123xyz',
                domain: '.example.com',
                path: '/',
                expires: '2024-12-31T23:59:59Z',
                secure: true,
                httpOnly: true,
                sameSite: 'Lax',
            },
        ])
    );

    console.log('Converted JSON Cookies', jsonCookies);
    console.log('Converted Netscape Cookies', netscapeCookies);
}

bootstrap();
