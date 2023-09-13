"use client"

import {
    Hydrate,
    dehydrate,
    QueryClient,
} from '@tanstack/react-query'
import {
    removeOldestQuery,
    PersistQueryClientProvider,
} from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import React from "react";

const CustomLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [window, setWindow] = React.useState<Window | undefined>(undefined);
    const [queryClient] = React.useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 60 * 60 * 24,
            },
        },
    }));
    React.useEffect(() => {
        setWindow(window);
    }, [window]);
    const localStoragePersister = createSyncStoragePersister({
        storage: window?.localStorage,
        retry: removeOldestQuery,
    });
    const dehydratedState = dehydrate(queryClient)

    return (
        <React.StrictMode>
            <PersistQueryClientProvider
                client={queryClient}
                persistOptions={{ persister: localStoragePersister }}
            >
                <Hydrate state={dehydratedState}>{children}</Hydrate>
            </PersistQueryClientProvider>
        </React.StrictMode>
    );
}

export default CustomLayout;