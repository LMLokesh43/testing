export const HOST_NAME_DEV: string = "http://localhost";
export const HOST_NAME_ANDROID_LOCAL: string = "http://10.0.2.2"; // for Android emulator debug only
export const HOST_PORT_DEV: number = 3000;
export const SERVER_PORT_DEV: number = 3001;
export const HOST_URL_DEV: string = `${HOST_NAME_DEV}:${HOST_PORT_DEV}`;
export const HOST_NAME_PROD: string = "https://<your_app_name>.com";

export const HOST_PORT_PROD: number = 80;
export const SERVER_PORT_PROD: number = HOST_PORT_PROD;

let url: string;
if (HOST_PORT_PROD === 80) {
    url = HOST_NAME_PROD;
} else {
    url = `${HOST_NAME_PROD}:${HOST_PORT_PROD}`;
}
export const HOST_URL_PROD = url;
export const CORS_WHITELIST: string [] = [
    `${HOST_NAME_ANDROID_LOCAL}:${HOST_PORT_DEV}`,
    HOST_URL_DEV
]
