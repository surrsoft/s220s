
export function errMsgGet({ error }: { error: unknown; }): string {
    console.log('!!-!!-!! 1745732021', error); // del+
    return error instanceof Error ? error.message : 'Unknown error';
}
