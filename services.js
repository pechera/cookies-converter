export function convertNetscapeToJson(text) {
    const jsonCookieLines = [];
    const cookieLines = text.split('\n');

    for (const cookie of cookieLines) {
        const currentCookie = cookie.split('\t').map((c) => c.trim());

        if (currentCookie.length === 7) {
            jsonCookieLines.push({
                domain: currentCookie[0],
                expirationDate: parseInt(currentCookie[4]) || null,
                httpOnly: currentCookie[1] === 'TRUE',
                name: currentCookie[5],
                path: currentCookie[2],
                secure: currentCookie[3] === 'TRUE',
                value: currentCookie[6],
            });
        }
    }

    return JSON.stringify(jsonCookieLines);
}

export function convertJsonToNetscape(text) {
    const netscapeCookieLines = [];
    const cookieLines = JSON.parse(text);

    for (const cookie of cookieLines) {
        let cookieStr = `${cookie.domain}\t`;
        cookieStr += `${cookie.httpOnly ? 'TRUE' : 'FALSE'}\t`;
        cookieStr += `${cookie.path}\t`;
        cookieStr += `${cookie.secure ? 'TRUE' : 'FALSE'}\t`;
        cookieStr += `${cookie.expirationDate}\t`;
        cookieStr += `${cookie.name}\t`;
        cookieStr += `${cookie.value}`;

        netscapeCookieLines.push(cookieStr);
    }

    return netscapeCookieLines.join('\n');
}
