import { MONGO_CLIENT_CONNECT_ERROR, MONGO_CLIENT_CREATE_ERROR, UNKNOWN_ERROR } from "s220s";

export function getUiText(s220s?: string) {
    switch (s220s) {
        case MONGO_CLIENT_CONNECT_ERROR:
            return 'Ошибка подключения к MongoDB';
        case MONGO_CLIENT_CREATE_ERROR:
            return 'Ошибка создания mongoClient';
        case UNKNOWN_ERROR:
            return 'Неизвестная ошибка';
        default:
            return s220s;
    }
}
